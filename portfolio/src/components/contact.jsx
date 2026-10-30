import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Snackbar,
  Alert,
  Link as MuiLink,
  Divider,
} from "@mui/material";
import { Email, LocationOn, Phone, LinkedIn, GitHub, Send } from "@mui/icons-material";

const Contact = () => {
  const [toastVisible, setToastVisible] = useState(false);

  // --- Theme Variables (Original Theme) ---
  const primaryBlue = "#1976d2";
  const darkText = "#333";
  const lightBg = "#f5f5f5";
  const cardBg = "#ffffff";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpwlopra", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3000);
        form.reset();
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (err) {
      alert("Error submitting form.");
    }
  };

  // Contact Data
  const contactInfo = {
    location: "Coimbatore, India",
    email: "jsragul1229@gmail.com",
    phone: "+91 8807026900",
    linkedin: "https://www.linkedin.com/in/ragul29",
    github: "https://github.com/ragul1229",
  };

  return (
    <Box
      sx={{
        backgroundColor: lightBg,
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        color: darkText,
        pb: 8,
        // Adjusted padding to create space where the Navbar would normally be
        pt: { xs: 4, md: 8 } 
      }}
    >
      {/* Container for content centered on page */}
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 4 } }}>
        
        {/* Title Section - Focused Arrangement */}
        <Typography
          variant="h3"
          fontWeight={800}
          sx={{ textAlign: "center", color: primaryBlue, mb: 1, textShadow: '1px 1px 2px rgba(0,0,0,0.05)' }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", color: "#555", mb: 8, maxWidth: 700, mx: "auto" }}
        >
          I'm ready to collaborate on your next full-stack or AI solution. Send me a message, and let's get started.
        </Typography>

        {/* Main Content Grid with Styling and Animations */}
        <Grid container spacing={6}>
          {/* Contact Form Card */}
          <Grid item xs={12} md={7}>
            <Card 
                // Enhanced Card Styling and Shadow
                sx={{ 
                    p: 4, 
                    borderRadius: 3, 
                    backgroundColor: cardBg,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)", // Prominent Shadow
                    // Custom hover/focus effect for subtle animation
                    transition: 'box-shadow 0.3s, transform 0.3s',
                    '&:hover': {
                        boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
                        transform: 'translateY(-4px)',
                    }
                }}
            >
                <Typography variant="h5" fontWeight={700} sx={{ mb: 4, color: primaryBlue, borderBottom: `2px solid ${lightBg}` }}>
                    Send Me a Message
                </Typography>
              <CardContent sx={{ p: 0 }}>
                <form onSubmit={handleSubmit}>
                  {/* Styled Text Fields */}
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    required
                    variant="outlined"
                    sx={{ mb: 3 }}
                  />
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    required
                    variant="outlined"
                    sx={{ mb: 3 }}
                  />
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={6}
                    required
                    variant="outlined"
                    sx={{ mb: 3 }}
                  />
                  {/* Button with Hover Animation */}
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<Send />}
                    sx={{
                      backgroundColor: primaryBlue,
                      color: "#fff",
                      fontWeight: "bold",
                      px: 4,
                      py: 1.5,
                      transition: 'all 0.3s ease', // Animation
                      '&:hover': { 
                        backgroundColor: "#1565c0", 
                        transform: 'scale(1.02)' 
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Info Card */}
          <Grid item xs={12} md={5}>
            <Card
                sx={{
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: cardBg,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    height: "100%", 
                    display: 'flex',
                    flexDirection: 'column',
                    // Added subtle hover effect for visual polish
                    transition: 'box-shadow 0.3s, transform 0.3s',
                    '&:hover': {
                        boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
                        transform: 'translateY(-4px)',
                    }
                }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{ mb: 4, color: primaryBlue }}
                >
                  Direct Contact Info
                </Typography>

                {/* Location */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <LocationOn sx={{ color: primaryBlue, mr: 2 }} />
                  <Typography color={darkText} fontWeight={500}>{contactInfo.location}</Typography>
                </Box>

                {/* Email */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Email sx={{ color: primaryBlue, mr: 2 }} />
                  <MuiLink
                    href={`mailto:${contactInfo.email}`}
                    underline="hover"
                    color={primaryBlue}
                    sx={{ transition: 'color 0.2s', '&:hover': { color: '#005bb5' } }}
                  >
                    {contactInfo.email}
                  </MuiLink>
                </Box>

                {/* Phone */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Phone sx={{ color: primaryBlue, mr: 2 }} />
                  <Typography color={darkText} fontWeight={500}>{contactInfo.phone}</Typography>
                </Box>
                
                <Divider sx={{ my: 3 }} /> {/* Visual Separator */}

                {/* Social Links */}
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{ mb: 2, color: darkText }}
                >
                  Connect With Me
                </Typography>

                <Box sx={{ display: "flex", gap: 3 }}>
                    <MuiLink href={contactInfo.linkedin} target="_blank" rel="noreferrer" sx={{ color: primaryBlue, transition: 'transform 0.3s, opacity 0.3s', '&:hover': { transform: 'scale(1.2)', opacity: 0.8 } }}>
                        <LinkedIn sx={{ fontSize: 32 }} />
                    </MuiLink>
                    <MuiLink href={contactInfo.github} target="_blank" rel="noreferrer" sx={{ color: darkText, transition: 'transform 0.3s, opacity 0.3s', '&:hover': { transform: 'scale(1.2)', color: primaryBlue } }}>
                        <GitHub sx={{ fontSize: 32 }} />
                    </MuiLink>
                </Box>
              </CardContent>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 4, pt: 2, borderTop: `1px solid ${lightBg}` }}>
                I am highly responsive and aim to return all project inquiries and collaboration requests within 24 hours.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Toast Notification */}
        <Snackbar
          open={toastVisible}
          autoHideDuration={3000}
          onClose={() => setToastVisible(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setToastVisible(false)}
            severity="success"
            sx={{ width: "100%", fontWeight: "bold" }}
          >
            Message sent successfully!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Contact; 