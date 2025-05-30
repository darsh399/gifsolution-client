import styled from "styled-components";

const Form = styled.form`
  max-width: 400px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    color: #6c63ff;
    margin-bottom: 1.5rem;
    font-weight: 700;
    font-size: 1.6rem;
  }

  input,
  textarea {
    padding: 0.75rem;
    border: 1.5px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #6c63ff;
      box-shadow: 0 0 5px rgba(108, 99, 255, 0.5);
    }
  }

  button {
    background: ${({ theme }) => theme.buttonBg || "#6C63FF"};
    color: white;
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background: #574dcf;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;

    h1 {
      font-size: 1.4rem;
    }

    input,
    textarea {
      font-size: 0.95rem;
    }

    button {
      font-size: 0.95rem;
    }
  }
`;

const ContactDetails = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  background: #f9f9f9;
  border-radius: 8px;
  color: #333;
  font-size: 1rem;
  line-height: 1.6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  h3 {
    margin-bottom: 1rem;
    color: #6c63ff;
    font-weight: 600;
    font-size: 1.3rem;
  }

  p {
    margin: 0.3rem 0;
    word-wrap: break-word;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;

    h3 {
      font-size: 1.1rem;
    }

    font-size: 0.95rem;
  }
`;

function Contact() {
  return (
    <>
      <Form>
        <h1>Get In Touch</h1>
        <input type="text" placeholder="Your name" aria-label="Your name" required />
        <input type="email" placeholder="Your email" aria-label="Your email" required />
        <textarea rows="5" placeholder="Your message" aria-label="Your message" required />
        <button type="submit">Send Message</button>
      </Form>

      <ContactDetails>
        <h3>Contact Information</h3>
        <p>
          <strong>Phone:</strong> 1111111111
        </p>
        <p>
          <strong>Email:</strong> contact@yourcompany.com
        </p>
        <p>
          <strong>Address:</strong> 1234 Your Company Address
        </p>
      </ContactDetails>
    </>
  );
}

export default Contact;
