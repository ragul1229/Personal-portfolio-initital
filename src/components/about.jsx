import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import {
  Box,
  Typography,
  Card,
  Avatar,
  Button,
  Chip,
  Container,
  Divider,
  Stack,
} from "@mui/material";
import {
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
  ArrowForward,
  Download,
  Code,
  Storage,
  Psychology,
} from "@mui/icons-material";

import profileImg from "../assets/ragul.jpg";
import elcodamicsImg from "../assets/elcodamics.jpg";

const colors = {
  primary: "#252338",
  secondary: "#59566D",
  accent: "#5145CD",
  background: "#F8F9FD",
  surface: "#FFFFFF",
  softPurple: "#EFEDFF",
  border: "#E5E3F0",
};

const cardStyles = {
  borderRadius: "20px",
  border: `1px solid ${colors.border}`,
  boxShadow: "0 8px 28px rgba(37, 35, 56, 0.05)",
  backgroundColor: colors.surface,
};

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "PHP", "SQL"],
  },
  {
    title: "Frontend Development",
    skills: [
      "React.js",
      "HTML5",
      "CSS3",
      "Material-UI (MUI)",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Spring Boot",
      "RESTful APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Databases & Storage",
    skills: ["MongoDB", "SQLite", "MySQL", "Query Optimization"],
  },
  {
    title: "AI & Data Science",
    skills: [
      "Data Analysis",
      "Python Data Stack",
      "Prompt Engineering",
      "LLM Integration",
      "Automated Classification",
    ],
  },
  {
    title: "Testing & Reliability",
    skills: [
      "Flaky Test Detection",
      "Automated Testing",
      "PyTest",
      "JUnit",
      "Debugging & Profiling",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Apache Maven",
      "Agile Sprints",
      "VS Code",
      "Postman",
    ],
  },
];

const internshipHighlights = [
  "Built React.js front-end interfaces from requirements, working closely with senior developers and QA in Agile sprints.",
  "Implemented form input validation and structured error handling to improve interface reliability and user experience.",
  "Developed robust PHP-based REST APIs, JWT authentication, and role-based access control workflows.",
  "Translated technical specifications into reusable React.js components with clean visual hierarchy and consistent styling.",
  "Collaborated with developers and QA to identify, debug, and resolve UI defects and performance bottlenecks.",
];

const projects = [
  {
    title: "Flaky Test Detector",
    subtitle: "AI-Automated Test Reliability & Analysis System",
    description:
      "Developed an automated Flaky Test Detection system to identify inconsistent software test cases that produce different results across repeated executions without any code changes. The system analyzes test execution history, identifies intermittent failures, and highlights potentially flaky tests to improve software testing reliability.",
    tags: ["Python", "FastAPI", "Streamlit", "SQLite", "AI / LLMs"],
    highlights: [
      "Engineered backend analysis pipelines in Python and FastAPI to parse and evaluate test execution metrics.",
      "Integrated SQLite for reliable local execution logging and historical trend tracking.",
      "Built an interactive Streamlit dashboard to visualize intermittent failures and unstable test patterns.",
      "Leveraged AI-driven insights to assist developers in isolating root causes of test flakiness.",
    ],
  },
  {
    title: "Software Dependency Risk Platform",
    subtitle: "Enterprise Java Dependency Intelligence Tool",
    description:
      "Designed and built a Java-based platform that parses Maven POM files, constructs dependency graphs, detects version conflicts, and executes automated verification test suites.",
    tags: [
      "Java",
      "Apache Maven",
      "Graph Data Structures",
      "Automated Testing",
    ],
    highlights: [
      "Parsed complex Maven POM files to extract transitive dependency trees and version metadata.",
      "Constructed dependency graphs to pinpoint version conflicts and security vulnerabilities.",
      "Automated upgrade intelligence recommendations and compatibility verification checks.",
      "Triggered automated test suites to validate build stability prior to dependency upgrades.",
    ],
  },
  {
    title: "Smart Public Grievance Redressal System",
    subtitle: "MERN Stack Citizen Service & Monitoring Portal",
    description:
      "Designed a full-stack MERN application incorporating microservice-style API separation, role-based access dashboards, and automated AI-driven complaint classification.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    highlights: [
      "Implemented microservice-inspired modular backend architecture with secure JWT authentication.",
      "Built role-based dashboards for citizens, departmental staff, and administrative oversight.",
      "Integrated automated classification logic to route complaints to appropriate municipal departments.",
      "Created fully responsive and accessible user interfaces for real-time grievance tracking.",
    ],
  },
];

const certifications = [
  {
    provider: "freeCodeCamp",
    title: "JavaScript Algorithms & Data Structures",
  },
  {
    provider: "freeCodeCamp",
    title: "Responsive Web Design",
  },
  {
    provider: "IBM",
    title: "Web Development Fundamentals",
  },
  {
    provider: "Certification",
    title: "Python 101 for Data Science",
  },
];

const focusStyle = {
  "&:focus-visible": {
    outline: `3px solid ${colors.accent}`,
    outlineOffset: "4px",
  },
};

const SectionTitle = ({ id, eyebrow, children }) => (
  <Box sx={{ mb: 3 }}>
    {eyebrow && (
      <Typography
        component="p"
        sx={{
          mb: 0.8,
          color: colors.accent,
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        {eyebrow}
      </Typography>
    )}

    <Typography
      id={id}
      component="h2"
      sx={{
        color: colors.primary,
        fontSize: { xs: "1.55rem", md: "1.9rem" },
        fontWeight: 800,
        lineHeight: 1.25,
      }}
    >
      {children}
    </Typography>
  </Box>
);

const BulletList = ({ items }) => (
  <Box
    component="ul"
    sx={{
      pl: 2.5,
      mb: 0,
      mt: 2,
      color: colors.secondary,
      "& li": {
        pl: 0.5,
        mb: 1.2,
        fontSize: "0.94rem",
        lineHeight: 1.8,
      },
      "& li:last-child": {
        mb: 0,
      },
      "& li::marker": {
        color: colors.accent,
      },
    }}
  >
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </Box>
);

const ContactItem = ({ icon: Icon, label, href, external = false }) => (
  <Stack direction="row" spacing={1.5} alignItems="flex-start">
    <Box
      sx={{
        width: 36,
        height: 36,
        flexShrink: 0,
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: colors.softPurple,
      }}
    >
      <Icon aria-hidden="true" sx={{ color: colors.accent, fontSize: 19 }} />
    </Box>

    {href ? (
      <Box
        component="a"
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        sx={{
          color: colors.primary,
          textDecoration: "none",
          fontSize: "0.9rem",
          lineHeight: 1.6,
          py: 0.7,
          overflowWrap: "anywhere",
          borderRadius: "4px",
          "&:hover": {
            color: colors.accent,
            textDecoration: "underline",
          },
          ...focusStyle,
        }}
      >
        {label}
      </Box>
    ) : (
      <Typography
        sx={{
          color: colors.secondary,
          fontSize: "0.9rem",
          lineHeight: 1.6,
          py: 0.7,
        }}
      >
        {label}
      </Typography>
    )}
  </Stack>
);

const About = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: colors.background,
        fontFamily: "'Poppins', sans-serif",
        "& .MuiTypography-root, & .MuiButton-root, & .MuiChip-root": {
          fontFamily: "inherit",
        },
      }}
    >
      <Navbar />

      <Container
        component="main"
        maxWidth="lg"
        sx={{
          pt: { xs: 4, md: 6 },
          pb: { xs: 6, md: 10 },
        }}
      >
        {/* Introduction */}
        <Card
          component="section"
          aria-labelledby="about-heading"
          sx={{
            ...cardStyles,
            p: { xs: 3, sm: 4, md: 5 },
            mb: 6,
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(135deg, #FFFFFF 0%, #F1EFFF 100%)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: 5,
              bgcolor: colors.accent,
            }}
          />

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 5 }}
            alignItems="center"
          >
            <Avatar
              src={profileImg}
              alt="Ragul J"
              sx={{
                width: { xs: 140, md: 170 },
                height: { xs: 140, md: 170 },
                border: "5px solid #FFFFFF",
                boxShadow: "0 12px 30px rgba(81, 69, 205, 0.15)",
                flexShrink: 0,
              }}
            >
              RJ
            </Avatar>

            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                sx={{
                  color: colors.accent,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  mb: 1,
                }}
              >
                About me
              </Typography>

              <Typography
                id="about-heading"
                component="h1"
                sx={{
                  fontSize: { xs: "2.4rem", md: "3.4rem" },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.04em",
                  color: colors.primary,
                  mb: 1.5,
                }}
              >
                Ragul J
              </Typography>

              <Typography
                sx={{
                  color: colors.accent,
                  fontWeight: 600,
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  mb: 2,
                }}
              >
                AI & Data Science Student | Full-Stack & AI Systems Developer
              </Typography>

              <Typography
                sx={{
                  maxWidth: 700,
                  color: colors.secondary,
                  lineHeight: 1.9,
                  fontSize: "0.98rem",
                }}
              >
                I build intelligent, full-stack software applications and
                AI-driven testing tools. Combining my background in Artificial
                Intelligence & Data Science with hands-on full-stack development
                experience, I design scalable backend architectures, automated
                testing suites, and clean, responsive user interfaces.
              </Typography>

              <Stack
                direction="row"
                useFlexGap
                flexWrap="wrap"
                gap={1}
                sx={{
                  mt: 2.5,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                {[
                  "Full-Stack Development",
                  "AI Automation",
                  "Software Reliability",
                ].map((label) => (
                  <Chip
                    key={label}
                    label={label}
                    size="small"
                    sx={{
                      bgcolor: "#FFFFFF",
                      color: colors.accent,
                      border: `1px solid ${colors.border}`,
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{
                  mt: 3,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  component={Link}
                  to="/projects"
                  variant="contained"
                  endIcon={<ArrowForward />}
                  disableElevation
                  sx={{
                    bgcolor: colors.accent,
                    borderRadius: "10px",
                    px: 3,
                    py: 1.2,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": { bgcolor: "#4035AB" },
                    ...focusStyle,
                  }}
                >
                  Explore My Projects
                </Button>

                <Button
                  component="a"
                  href={`${import.meta.env.BASE_URL}Ragul_Resume.pdf`}
                  download="Ragul_Resume.pdf"
                  variant="outlined"
                  startIcon={<Download />}
                  sx={{
                    color: colors.accent,
                    borderColor: colors.accent,
                    borderRadius: "10px",
                    px: 3,
                    py: 1.2,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": {
                      borderColor: colors.accent,
                      bgcolor: colors.softPurple,
                    },
                    ...focusStyle,
                  }}
                >
                  Download Resume
                </Button>

                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  sx={{
                    color: colors.accent,
                    borderColor: colors.accent,
                    borderRadius: "10px",
                    px: 3,
                    py: 1.2,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": {
                      borderColor: colors.accent,
                      bgcolor: colors.softPurple,
                    },
                    ...focusStyle,
                  }}
                >
                  Get in Touch
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Card>

        {/* Main layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "minmax(0, 1fr)",
              md: "minmax(0, 1.8fr) minmax(0, 1fr)",
            },
            gap: 4,
            alignItems: "start",
          }}
        >
          {/* Experience, projects, education */}
          <Stack spacing={5} sx={{ minWidth: 0 }}>
            <Box component="section" aria-labelledby="experience-heading">
              <SectionTitle
                id="experience-heading"
                eyebrow="Professional background"
              >
                Experience
              </SectionTitle>

              <Card sx={{ ...cardStyles, p: { xs: 2.5, sm: 3.5 } }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  alignItems="flex-start"
                >
                  <Avatar
                    src={elcodamicsImg}
                    alt="Elcodamics"
                    variant="rounded"
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: "12px",
                      border: `1px solid ${colors.border}`,
                      bgcolor: colors.softPurple,
                      color: colors.accent,
                    }}
                  >
                    E
                  </Avatar>

                  <Box>
                    <Typography
                      component="h3"
                      sx={{
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: colors.primary,
                      }}
                    >
                      Full Stack Developer Intern
                    </Typography>

                    <Typography
                      sx={{ color: colors.accent, fontWeight: 600, mt: 0.5 }}
                    >
                      Elcodamics · Onsite
                    </Typography>

                    <Typography
                      sx={{
                        color: colors.secondary,
                        fontSize: "0.85rem",
                        mt: 0.5,
                      }}
                    >
                      Aug 2025 – Nov 2025
                    </Typography>
                  </Box>
                </Stack>

                <Divider sx={{ my: 2.5, borderColor: colors.border }} />

                <BulletList items={internshipHighlights} />

                <Stack
                  direction="row"
                  useFlexGap
                  flexWrap="wrap"
                  gap={1}
                  sx={{ mt: 3 }}
                >
                  {["React.js", "PHP", "REST APIs", "JWT Auth", "Agile"].map(
                    (skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: colors.border,
                          color: colors.secondary,
                        }}
                      />
                    ),
                  )}
                </Stack>
              </Card>
            </Box>

            <Box component="section" aria-labelledby="projects-heading">
              <SectionTitle
                id="projects-heading"
                eyebrow="Featured engineering work"
              >
                Featured Projects
              </SectionTitle>

              <Stack spacing={3}>
                {projects.map((project) => (
                  <Card
                    key={project.title}
                    component="article"
                    sx={{
                      ...cardStyles,
                      p: { xs: 2.5, sm: 3.5 },
                      borderTop: `4px solid ${colors.accent}`,
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{
                        fontSize: "1.4rem",
                        fontWeight: 800,
                        color: colors.primary,
                        mb: 0.5,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: colors.accent,
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        mb: 2,
                      }}
                    >
                      {project.subtitle}
                    </Typography>

                    <Typography
                      sx={{
                        color: colors.secondary,
                        lineHeight: 1.8,
                        fontSize: "0.95rem",
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Stack
                      direction="row"
                      useFlexGap
                      flexWrap="wrap"
                      gap={1}
                      sx={{ mt: 2 }}
                    >
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: colors.softPurple,
                            color: colors.accent,
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Stack>

                    <BulletList items={project.highlights} />
                  </Card>
                ))}
              </Stack>
            </Box>

            <Box component="section" aria-labelledby="education-heading">
              <SectionTitle
                id="education-heading"
                eyebrow="Academic foundation"
              >
                Education
              </SectionTitle>

              <Card sx={{ ...cardStyles, p: { xs: 2.5, sm: 3.5 } }}>
                <Typography
                  sx={{
                    color: colors.accent,
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  2023 – 2027
                </Typography>

                <Typography
                  component="h3"
                  sx={{ color: colors.primary, fontWeight: 700 }}
                >
                  B.Tech — Artificial Intelligence and Data Science
                </Typography>

                <Typography
                  sx={{
                    color: colors.secondary,
                    fontSize: "0.93rem",
                    lineHeight: 1.8,
                    mt: 1,
                  }}
                >
                  Sri Shakthi Institute of Engineering and Technology,
                  Coimbatore
                </Typography>

                <Chip
                  label="CGPA: 8.3 / 10"
                  size="small"
                  sx={{
                    mt: 1.5,
                    bgcolor: colors.softPurple,
                    color: colors.accent,
                    fontWeight: 600,
                  }}
                />

                <Divider sx={{ my: 3, borderColor: colors.border }} />

                <Typography
                  sx={{
                    color: colors.accent,
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  2021 – 2023
                </Typography>

                <Typography
                  component="h3"
                  sx={{ color: colors.primary, fontWeight: 700 }}
                >
                  HSC — Class XII
                </Typography>

                <Typography
                  sx={{
                    color: colors.secondary,
                    fontSize: "0.93rem",
                    lineHeight: 1.8,
                    mt: 1,
                  }}
                >
                  SB Matriculation Higher Secondary School, Musiri, Trichy,
                  Tamil Nadu
                </Typography>

                <Chip
                  label="Score: 84%"
                  size="small"
                  sx={{
                    mt: 1.5,
                    bgcolor: colors.softPurple,
                    color: colors.accent,
                    fontWeight: 600,
                  }}
                />
              </Card>
            </Box>
          </Stack>

          {/* Contact, technical skills, certifications */}
          <Stack spacing={4} sx={{ minWidth: 0 }}>
            <Card
              component="section"
              aria-labelledby="contact-heading"
              sx={{ ...cardStyles, p: 3 }}
            >
              <Typography
                id="contact-heading"
                component="h2"
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: colors.primary,
                  mb: 2.5,
                }}
              >
                Let’s Connect
              </Typography>

              <Stack spacing={2}>
                <ContactItem
                  icon={LocationOn}
                  label="Coimbatore, Tamil Nadu, India"
                />
                <ContactItem
                  icon={Email}
                  label="jsragul1229@gmail.com"
                  href="mailto:jsragul1229@gmail.com"
                />
                <ContactItem
                  icon={Phone}
                  label="+91 8807026900"
                  href="tel:+918807026900"
                />
                <ContactItem
                  icon={LinkedIn}
                  label="LinkedIn"
                  href="https://linkedin.com/in/ragul29"
                  external
                />
                <ContactItem
                  icon={GitHub}
                  label="GitHub"
                  href="https://github.com/ragul1229"
                  external
                />
              </Stack>
            </Card>

            <Card
              component="section"
              aria-labelledby="skills-heading"
              sx={{ ...cardStyles, p: 3 }}
            >
              <Typography
                id="skills-heading"
                component="h2"
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: colors.primary,
                  mb: 3,
                }}
              >
                Technical Skills
              </Typography>

              <Stack spacing={2.5}>
                {skillGroups.map((group, index) => (
                  <Box key={group.title}>
                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        color: colors.primary,
                        fontSize: "0.9rem",
                        mb: 1.2,
                      }}
                    >
                      {group.title}
                    </Typography>

                    <Stack direction="row" useFlexGap flexWrap="wrap" gap={0.8}>
                      {group.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            bgcolor: colors.softPurple,
                            color: colors.accent,
                            height: "auto",
                            maxWidth: "100%",
                            "& .MuiChip-label": {
                              whiteSpace: "normal",
                              py: 0.6,
                              lineHeight: 1.4,
                            },
                          }}
                        />
                      ))}
                    </Stack>

                    {index < skillGroups.length - 1 && (
                      <Divider sx={{ mt: 2.5, borderColor: colors.border }} />
                    )}
                  </Box>
                ))}
              </Stack>
            </Card>

            <Card
              component="section"
              aria-labelledby="certifications-heading"
              sx={{ ...cardStyles, p: 3 }}
            >
              <Typography
                id="certifications-heading"
                component="h2"
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: colors.primary,
                  mb: 2.5,
                }}
              >
                Certifications
              </Typography>

              <Stack spacing={2.5}>
                {certifications.map((certification) => (
                  <Box key={certification.title}>
                    <Typography
                      component="h3"
                      sx={{
                        color: colors.primary,
                        fontWeight: 600,
                        fontSize: "0.92rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {certification.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: colors.secondary,
                        fontSize: "0.82rem",
                        mt: 0.5,
                      }}
                    >
                      {certification.provider}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Card>

            <Card
              component="section"
              aria-labelledby="publication-heading"
              sx={{
                ...cardStyles,
                p: 3,
                bgcolor: colors.softPurple,
              }}
            >
              <Typography
                id="publication-heading"
                component="h2"
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: colors.primary,
                  mb: 2,
                }}
              >
                Research Publication
              </Typography>

              <Typography
                component="h3"
                sx={{
                  color: colors.accent,
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Hostel Management System
              </Typography>

              <Typography
                sx={{
                  color: colors.secondary,
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                }}
              >
                Published in the International Journal of Research Publication
                and Reviews (IJRPR), Volume 6, Issue 5, 2025.
              </Typography>
            </Card>
          </Stack>
        </Box>

        {/* Closing call to action */}
        <Box
          component="section"
          aria-labelledby="collaboration-heading"
          sx={{
            mt: { xs: 6, md: 8 },
            p: { xs: 3, md: 5 },
            textAlign: "center",
            borderRadius: "20px",
            bgcolor: colors.primary,
          }}
        >
          <Typography
            id="collaboration-heading"
            component="h2"
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 700,
              mb: 1.5,
            }}
          >
            Scalable systems. Intelligent applications.
          </Typography>

          <Typography
            sx={{
              color: "#DCD9EC",
              maxWidth: 560,
              mx: "auto",
              mb: 3,
              lineHeight: 1.8,
            }}
          >
            Let’s connect about full-stack engineering, AI automation, and
            building robust software solutions.
          </Typography>

          <Button
            component={Link}
            to="/contact"
            variant="contained"
            endIcon={<ArrowForward />}
            disableElevation
            sx={{
              bgcolor: "#FFFFFF",
              color: colors.accent,
              borderRadius: "10px",
              px: 3,
              py: 1.3,
              fontWeight: 700,
              textTransform: "none",
              "&:hover": {
                bgcolor: colors.softPurple,
              },
              "&:focus-visible": {
                outline: "3px solid #FFFFFF",
                outlineOffset: "5px",
              },
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
