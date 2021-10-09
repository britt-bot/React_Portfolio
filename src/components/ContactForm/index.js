import React, {setForm} from 'react';
import emailjs from 'emailjs-com';
import ReCaptchaV2 from 'react-google-recaptcha';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import "./style.css";

const SERVICE_ID = "portfolioContactSVC";
const TEMPLATE_ID = "portfolioContact";
const USER_ID = "user_yKHJFf4ORYa66LPGq0rQi";

const ContactForm = () => {
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          })
        });
      e.target.reset()
  };

  const handleToken = (token) => {
    setForm((currentForm) => {
     return {...currentForm, token }
    })
  };

  const handleExpire = () => {
    setForm((currentForm) => {
     return {...currentForm, token: null }
    })
  };

  return (
    <div className="App">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <ReCaptchaV2
          sitekey={process.env.REACT_APP_SITE_KEY}
          onChange={handleToken}
          onExpire={handleExpire}
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form>
    </div>
  );
}
export default ContactForm;






// import React from 'react';
// import Recaptcha from 'react-recaptcha';
// import * as emailjs from 'emailjs-com';
// import { Field, Label, Control, Input, Button, Textarea } from 'rbx';

// class ContactForm extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//       recaptchaLoad: false,
//       isVerified: false
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.resetForm = this.resetForm.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
//     this.verifiedRecaptcha = this.verifiedRecaptcha.bind(this);
//   }

//   handleSubmit(event) {
//     const { recaptchaLoad, isVerified } = this.state;
//     event.preventDefault();
//     if (recaptchaLoad && isVerified) {
//       const { name, email, subject, message } = this.state;
//       const templateParams = {
//         from_name: name,
//         from_email: email,
//         to_name: 'aeonianmeraki@gmail.com',
//         subject: subject,
//         message_html: message,
//         'g-recaptcha-response': '6LfQa5QcAAAAAEkHF9H0n4Aol04daN0JN4dBDb5W'
//       };
//       emailjs.send(
//         'gmail',
//         'portfolioContact',
//         templateParams,
//         'user_yKHJFf4ORYa66LPGq0rQi'
//       );
    
//     alert('Your message has been sent successfully!');
//       this.resetForm();
//     } else {
//       alert('Please check the Recaptcha to send your message.');
//     };
//   };

//   resetForm() {
//     this.setState({
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//       recaptchaLoad: false,
//       isVerified: false
//     });
//   }

//   handleChange(event) {
//     this.setState({ [event.target.name]: event.target.value });
//   }

//   recaptchaLoaded() {
//     this.setState({ recaptchaLoad: true });
//   }
  
//   verifiedRecaptcha(response) {
//     if (response) {
//       this.setState({ isVerified: true });
//     }
//   }

//   render() {
//     const { name, email, subject, message } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <Field>
//           <Label>Name</Label>
//           <Control>
//             <Input
//               name="name"
//               type="text"
//               placeholder="Your Name..."
//               value={name}
//               onChange={this.handleChange}
//             />
//           </Control>
//         </Field>
//         <Field>
//           <Label>Email Address</Label>
//           <Control>
//             <Input
//               name="email"
//               type="email"
//               placeholder="email@gmail.com"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </Control>
//         </Field>
//         <Field>
//           <Label>Subject</Label>
//           <Control>
//             <Input
//               name="subject"
//               type="text"
//               placeholder="Subject?"
//               value={subject}
//               onChange={this.handleChange}
//             />
//           </Control>
//         </Field>
//         <Field>
//           <Label>Message</Label>
//           <Control>
//             <Textarea
//               name="message"
//               placeholder="Tell me more about..."
//               value={message}
//               onChange={this.handleChange}
//             />
//           </Control>
//         </Field>
        
//         <Field kind="group">
//           <Control>
//             <Button color="dark">Send</Button>
//           </Control>
//           <Control>
//             <Button text>Cancel</Button>
//           </Control>
//         </Field>
//       </form>
//     );
//   }
// }

// export default ContactForm;