import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  Chip,
  Grid,
  Container,
  Divider,
  Stack,
} from "@mui/material";
import { Email, GitHub, LinkedIn, LocationOn } from "@mui/icons-material";

// Import images
import profileImg from "../assets/ragul.jpg";
import elcodamicsImg from "../assets/elcodamics.jpg";

const About = () => {
  // --- Theme ---
  const primaryColor = "#333"; // Dark text
  const secondaryColor = "#fdfdfd"; // Soft background
  const accentColor = "#6c63ff"; // Soft purple
  const cardShadow = "0 6px 20px rgba(0,0,0,0.08)";

  // Section Title Component
  const SectionTitle = ({ children }) => (
    <Typography variant="h4" fontWeight={700} sx={{ mb: 3, mt: 5, color: primaryColor }}>
      {children}
      <Box component="span" sx={{ color: accentColor, ml: 1 }}>
        .
      </Box>
    </Typography>
  );

  return (
    <Box sx={{ backgroundColor: secondaryColor, minHeight: "100vh", fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ pt: 6, pb: 10 }}>
        {/* Hero */}
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            p: 4,
            mb: 8,
            boxShadow: cardShadow,
            borderRadius: 3,
            backgroundColor: "#fff",
          }}
        >
          <Avatar
            src={profileImg}
            alt="Ragul J"
            sx={{
              width: 150,
              height: 150,
              mr: { md: 5 },
              mb: { xs: 3, md: 0 },
              border: `4px solid ${accentColor}`,
            }}
          />
          <Box textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h3" fontWeight={800} color={primaryColor}>
              Ragul J
            </Typography>
            <Typography variant="h6" sx={{ color: accentColor, mb: 2 }}>
              Full-Stack Developer | Generative AI Specialist
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: "#555" }}>
              Passionate Full-Stack Developer and AI enthusiast. I specialize in integrating <strong>LLMs</strong> and building robust, user-focused MERN stack applications. I aim to merge <strong>innovation</strong> with <strong>seamless user experience</strong>.
            </Typography>
          </Box>
        </Card>

        {/* Main Grid */}
        <Grid container spacing={4}>
          {/* Left Column: Experience & Projects */}
          <Grid item xs={12} md={8}>
            <SectionTitle>Experience & Projects</SectionTitle>

            {/* Internship Card */}
            <Card sx={{ mb: 4, p: 3, boxShadow: cardShadow, borderLeft: `5px solid ${accentColor}` }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Avatar src={elcodamicsImg} variant="square" sx={{ width: 60, height: 60, borderRadius: 1 }} />
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Internship at Elcodamics
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Full-Stack Development & AI Integration
                  </Typography>
                  <ul style={{ paddingLeft: 20, margin: 0, lineHeight: 1.6 }}>
                    <li>Built full-stack features using React, Node.js, and MongoDB.</li>
                    <li>Integrated AI-powered solutions to enhance user experience.</li>
                    <li>Collaborated on system architecture for scalability.</li>
                  </ul>
                </Box>
              </Box>
            </Card>

            {/* AI Projects Card */}
            <Card sx={{ mb: 4, p: 3, boxShadow: cardShadow, borderLeft: `5px solid ${accentColor}` }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Key AI & Development Solutions
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Card variant="outlined" sx={{ p: 2, height: "100%" }}>
                    <Typography fontWeight="bold">Voice-Controlled AI Assistant</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Built a robust conversational agent with speech recognition.
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card variant="outlined" sx={{ p: 2, height: "100%" }}>
                    <Typography fontWeight="bold">ML-Powered Outpass System</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Developed an automated secure system for verification.
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Card>

            {/* Achievements */}
            <SectionTitle>Achievements</SectionTitle>
            <Card sx={{ p: 3, boxShadow: cardShadow }}>
              <ul style={{ listStyleType: "disc", paddingLeft: 20, lineHeight: 1.8 }}>
                <li>🏆 Built and deployed 5+ real-world AI & web projects.</li>
                <li>🎤 Presented research paper on AI-driven smart systems.</li>
                <li>🤝 Active contributor on GitHub and open-source projects.</li>
              </ul>
            </Card>
          </Grid>

          {/* Right Column: Contact & Skills */}
          <Grid item xs={12} md={4}>
            {/* Contact Info */}
            <Card sx={{ mb: 4, p: 3, boxShadow: cardShadow }}>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: accentColor }}>
                Contact Info
              </Typography>
              <Stack spacing={1.5}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LocationOn sx={{ color: accentColor }} /> 
                  <Typography>Coimbatore, India</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Email sx={{ color: accentColor }} />
                  <Typography>
                    <a href="mailto:jsragul1229@gmail.com" style={{ textDecoration: "none", color: primaryColor }}>jsragul1229@gmail.com</a>
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <GitHub sx={{ color: accentColor }} />
                  <Typography>
                    <a href="https://github.com/ragul1229" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: primaryColor }}>
                      GitHub
                    </a>
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LinkedIn sx={{ color: accentColor }} />
                  <Typography>
                    <a href="https://linkedin.com/in/ragul29" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: primaryColor }}>
                      LinkedIn
                    </a>
                  </Typography>
                </Box>
              </Stack>
            </Card>

            {/* Skills */}
            <SectionTitle>Skills</SectionTitle>
            <Card sx={{ p: 3, boxShadow: cardShadow }}>
              <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>AI & ML</Typography>
              <Stack direction="row" flexWrap="wrap" gap={1} mb={2}>
                {["Generative AI", "Prompt Engineering", "Machine Learning", "LLM Integration"].map(skill => (
                  <Chip key={skill} label={skill} size="small" sx={{ backgroundColor: accentColor, color: "#fff", fontWeight: 'bold' }} />
                ))}
              </Stack>

              <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>Full-Stack Development</Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Python", "Three.js", "Framer Motion"].map(skill => (
                  <Chip key={skill} label={skill} size="small" variant="outlined" sx={{ borderColor: accentColor, color: primaryColor }} />
                ))}
              </Stack>
            </Card>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", py: 6, mt: 10, borderRadius: 3 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: accentColor, color: "#fff", fontWeight: "bold", p: "10px 30px" }}
            component={Link}
            to="/contact"
          >
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
