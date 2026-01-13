import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate = ({
  name,
  email,
  message,
}: ContactEmailTemplateProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        {/* Header with gradient */}
        <Section style={header}>
          <Heading style={h1}>New Contact Message</Heading>
          <Text style={headerText}>
            You have received a new message from your portfolio
          </Text>
        </Section>

        {/* Content */}
        <Section style={content}>
          {/* From Section */}
          <Section style={fromSection}>
            <Text style={label}>FROM</Text>
            <Text style={fromName}>{name}</Text>
            <Link href={`mailto:${email}`} style={emailLink}>
              {email}
            </Link>
          </Section>

          {/* Message Section */}
          <Section style={messageSection}>
            <Text style={label}>MESSAGE</Text>
            <Section style={messageBox}>
              <Text style={messageText}>{message}</Text>
            </Section>
          </Section>

          {/* Reply Button */}
          <Section style={buttonSection}>
            <Link
              href={`mailto:${email}?subject=Re: Abdell Design Thumbnail portfolio`}
              style={button}
            >
              Reply to {name}
            </Link>
          </Section>
        </Section>

        {/* Footer */}
        <Section style={footer}>
          <Text style={footerText}>
            This message was sent from your portfolio contact form
          </Text>
          <Text style={footerDate}>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </Section>

        <Hr style={hr} />

        {/* Footer note */}
        <Text style={footerNote}>
          abdell design © {new Date().getFullYear()}
        </Text>
      </Container>
    </Body>
  </Html>
);

// Styles
const main = {
  backgroundColor: "#f4f4f5",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  padding: "0",
  borderRadius: "12px",
  maxWidth: "600px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const header = {
  background: "linear-gradient(135deg, #000000 0%, #434343 100%)",
  padding: "40px 30px",
  textAlign: "center" as const,
  borderRadius: "12px 12px 0 0",
};

const h1 = {
  margin: "0",
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "bold",
  letterSpacing: "-0.5px",
};

const headerText = {
  margin: "10px 0 0 0",
  color: "#e0e7ff",
  fontSize: "14px",
};

const content = {
  padding: "40px 30px",
};

const fromSection = {
  backgroundColor: "#f8fafc",
  padding: "20px",
  borderRadius: "8px",
  borderLeft: "4px solid #000000",
  marginBottom: "30px",
};

const label = {
  margin: "0 0 8px 0",
  fontSize: "12px",
  color: "#64748b",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  fontWeight: "600",
};

const fromName = {
  margin: "0 0 4px 0",
  fontSize: "18px",
  color: "#1e293b",
  fontWeight: "600",
};

const emailLink = {
  color: "#667eea",
  textDecoration: "none",
  fontSize: "14px",
};

const messageSection = {
  marginTop: "20px",
};

const messageBox = {
  backgroundColor: "#f8fafc",
  padding: "20px",
  borderRadius: "8px",
  border: "1px solid #e2e8f0",
  marginTop: "12px",
};

const messageText = {
  margin: "0",
  fontSize: "15px",
  color: "#334155",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap" as const,
};

const buttonSection = {
  marginTop: "30px",
  textAlign: "center" as const,
};

const button = {
  display: "inline-block",
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: "14px 32px",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: "600",
  boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.7)",
};

const footer = {
  backgroundColor: "#f8fafc",
  padding: "30px",
  textAlign: "center" as const,
  borderTop: "1px solid #e2e8f0",
  borderRadius: "0 0 12px 12px",
};

const footerText = {
  margin: "0 0 8px 0",
  fontSize: "13px",
  color: "#64748b",
};

const footerDate = {
  margin: "0",
  fontSize: "12px",
  color: "#94a3b8",
};

const hr = {
  borderColor: "#e2e8f0",
  margin: "20px 0",
};

const footerNote = {
  marginTop: "20px",
  fontSize: "12px",
  color: "#94a3b8",
  textAlign: "center" as const,
  padding: "0 20px 20px",
};
