import { useState, useRef } from 'react';
import SEO from '../components/SEO';
import './BookDemo.css';

const countries = [
  { name: "Kenya", code: "KE", dialCode: "+254" },
  { name: "Uganda", code: "UG", dialCode: "+256" },
  { name: "Tanzania", code: "TZ", dialCode: "+255" },
  { name: "Rwanda", code: "RW", dialCode: "+250" },
  { name: "Nigeria", code: "NG", dialCode: "+234" },
  { name: "South Africa", code: "ZA", dialCode: "+27" },
  { name: "Ethiopia", code: "ET", dialCode: "+251" },
  { name: "Ghana", code: "GH", dialCode: "+233" },
  { name: "United States", code: "US", dialCode: "+1" },
  { name: "United Kingdom", code: "GB", dialCode: "+44" },
  { name: "---", code: "", dialCode: "" },
  { name: "Afghanistan", code: "AF", dialCode: "+93" },
  { name: "Albania", code: "AL", dialCode: "+355" },
  { name: "Algeria", code: "DZ", dialCode: "+213" },
  { name: "Argentina", code: "AR", dialCode: "+54" },
  { name: "Australia", code: "AU", dialCode: "+61" },
  { name: "Austria", code: "AT", dialCode: "+43" },
  { name: "Bangladesh", code: "BD", dialCode: "+880" },
  { name: "Belgium", code: "BE", dialCode: "+32" },
  { name: "Brazil", code: "BR", dialCode: "+55" },
  { name: "Canada", code: "CA", dialCode: "+1" },
  { name: "China", code: "CN", dialCode: "+86" },
  { name: "Egypt", code: "EG", dialCode: "+20" },
  { name: "France", code: "FR", dialCode: "+33" },
  { name: "Germany", code: "DE", dialCode: "+49" },
  { name: "India", code: "IN", dialCode: "+91" },
  { name: "Indonesia", code: "ID", dialCode: "+62" },
  { name: "Italy", code: "IT", dialCode: "+39" },
  { name: "Japan", code: "JP", dialCode: "+81" },
  { name: "Malaysia", code: "MY", dialCode: "+60" },
  { name: "Mexico", code: "MX", dialCode: "+52" },
  { name: "Netherlands", code: "NL", dialCode: "+31" },
  { name: "New Zealand", code: "NZ", dialCode: "+64" },
  { name: "Pakistan", code: "PK", dialCode: "+92" },
  { name: "Philippines", code: "PH", dialCode: "+63" },
  { name: "Poland", code: "PL", dialCode: "+48" },
  { name: "Portugal", code: "PT", dialCode: "+351" },
  { name: "Russia", code: "RU", dialCode: "+7" },
  { name: "Saudi Arabia", code: "SA", dialCode: "+966" },
  { name: "Singapore", code: "SG", dialCode: "+65" },
  { name: "Spain", code: "ES", dialCode: "+34" },
  { name: "Sweden", code: "SE", dialCode: "+46" },
  { name: "Switzerland", code: "CH", dialCode: "+41" },
  { name: "Thailand", code: "TH", dialCode: "+66" },
  { name: "Turkey", code: "TR", dialCode: "+90" },
  { name: "United Arab Emirates", code: "AE", dialCode: "+971" },
  { name: "Vietnam", code: "VN", dialCode: "+84" },
  { name: "Zambia", code: "ZM", dialCode: "+260" },
  { name: "Zimbabwe", code: "ZW", dialCode: "+263" }
];

const BookDemo = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+254',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Get country name from dial code
  const getCountryNameFromDialCode = (dialCode) => {
    const country = countries.find(c => c.dialCode === dialCode);
    return country ? country.name : 'Unknown';
  };

  // Format submission date
  const formatSubmissionDate = () => {
    const now = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    let suffix = 'th';
    if (day === 1 || day === 21 || day === 31) suffix = 'st';
    else if (day === 2 || day === 22) suffix = 'nd';
    else if (day === 3 || day === 23) suffix = 'rd';

    return `${day}${suffix} ${month} ${year} at ${hours}${minutes}hours`;
  };

  // Send to Slack
  const sendToSlack = async (fullName, email, countryName, fullPhone) => {
    const submittedDate = formatSubmissionDate();

    const slackPayload = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "New Demo Request from LogixFleet Website",
            emoji: false
          }
        },
        {
          type: "divider"
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Full Name:* ${fullName}\n*Email:* ${email}\n*Country:* ${countryName}\n*Phone Number:* ${fullPhone}`
          }
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `📅 *Submitted:* ${submittedDate}`
            }
          ]
        },
        {
          type: "divider"
        }
      ]
    };

    return fetch('https://hooks.slack.com/services/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', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(slackPayload)
    });
  };

  // Send to Mailchimp via hidden iframe
  const sendToMailchimp = (fullName, email, fullPhone, countryName) => {
    return new Promise((resolve) => {
      const iframe = document.createElement('iframe');
      iframe.name = 'mailchimp-iframe-' + Date.now();
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://logixfleet.us9.list-manage.com/subscribe/post?u=a98d5ad28ad7d513fbd351572&id=0c4b6e3036&f_id=008e56e1f0';
      form.target = iframe.name;

      const fields = {
        'EMAIL': email,
        'FNAME': fullName,
        'PHONE': fullPhone,
        'MMERGE7': countryName,
        'tags': '11841881,11841882'
      };

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      // Honeypot field for bot prevention
      const honeypot = document.createElement('input');
      honeypot.type = 'hidden';
      honeypot.name = 'b_a98d5ad28ad7d513fbd351572_0c4b6e3036';
      honeypot.value = '';
      form.appendChild(honeypot);

      document.body.appendChild(form);
      form.submit();

      setTimeout(() => {
        if (form.parentNode) document.body.removeChild(form);
        if (iframe.parentNode) document.body.removeChild(iframe);
        console.log('Mailchimp subscription sent');
        resolve();
      }, 1000);
    });
  };

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === 'fullName') {
      processedValue = capitalizeWords(value);
    } else if (name === 'email') {
      processedValue = value.toLowerCase();
    } else if (name === 'phone') {
      processedValue = value.replace(/\D/g, '');
    }

    setFormData(prev => ({ ...prev, [name]: processedValue }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters long';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email (e.g., name@gmail.com)';
    }

    // Validate phone
    if (!formData.phone) {
      newErrors.phone = 'Please enter your phone number';
    } else if (formData.phone.length < 6) {
      newErrors.phone = 'Phone must be at least 6 digits';
    } else if (formData.phone.length > 15) {
      newErrors.phone = 'Phone number is too long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) return;

    setIsLoading(true);

    const fullName = formData.fullName;
    const email = formData.email;
    const countryName = getCountryNameFromDialCode(formData.countryCode);
    const fullPhone = `${formData.countryCode} ${formData.phone}`;

    try {
      // Send to Slack and Mailchimp in parallel
      await Promise.all([
        sendToSlack(fullName, email, countryName, fullPhone),
        sendToMailchimp(fullName, email, fullPhone, countryName)
      ]);

      console.log('SUCCESS! Slack and Mailchimp notifications sent.');
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        countryCode: '+254',
        phone: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-content">
      <SEO
        title="Book a Demo"
        description="Schedule a personalized demo of LogixFleet. See how our fleet and delivery management software can transform your logistics operations."
        keywords="book demo, Fleet Control OS demo, delivery software demo, LogixFleet demo, free demo"
        canonical="/book-a-demo"
      />
      <main className="main-container">
        <div className="container">
          <div className="demo-section">
            {/* Left Side - Information */}
            <div className="info-content">
              <h1 className="page-title">Book a Demo</h1>
              <p className="page-subtitle">
                Discover how LogixFleet can transform your logistics operations. Fill out the form
                and we'll schedule a personalized demo tailored to your business needs.
              </p>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon"></div>
                  <div className="benefit-text">See how our platform streamlines your entire operation</div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon"></div>
                  <div className="benefit-text">Get answers to all your questions from our team</div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon"></div>
                  <div className="benefit-text">Learn how we can customize the solution for your needs</div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="form-container">
              <div className="form-header">
                <h2 className="form-title">Get Started</h2>
                <p className="form-subtitle">We'll contact you within 24 hours to schedule your demo.</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className={`form-group ${errors.fullName ? 'error' : ''}`}>
                  <label htmlFor="fullName">Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="e.g. John Doe"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.fullName && <div className="error-message">{errors.fullName}</div>}
                </div>

                {/* Email */}
                <div className={`form-group ${errors.email ? 'error' : ''}`}>
                  <label htmlFor="email">Email <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </div>

                {/* Phone Number */}
                <div className={`form-group ${errors.phone ? 'error' : ''}`}>
                  <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                  <div className="phone-container">
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      required
                    >
                      {countries.map((country, index) => (
                        country.code === "" ? (
                          <option key={index} disabled>────────────</option>
                        ) : (
                          <option key={country.code} value={country.dialCode}>
                            {country.name} ({country.dialCode})
                          </option>
                        )
                      ))}
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="712 345 678"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  {errors.phone && <div className="error-message">{errors.phone}</div>}
                </div>

                <button type="submit" className={`submit-btn ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
                  {isLoading && <div className="spinner"></div>}
                  <span className="btn-text">{isLoading ? 'Sending...' : 'Schedule Your Demo'}</span>
                </button>

                {submitStatus === 'success' && (
                  <div className="message success show">
                    <strong>Success!</strong> Your demo request has been submitted. We'll contact you within 24 hours to schedule your personalized demo.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="message error show">
                    <strong>Error!</strong> There was a problem sending your request. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookDemo;
