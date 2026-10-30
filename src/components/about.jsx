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
    title: "Design Tools",
    skills: ["Figma", "FigJam"],
  },
  {
    title: "UX Research",
    skills: [
      "User Interviews",
      "Surveys",
      "User Personas",
      "Competitive Analysis",
    ],
  },
  {
    title: "Information Architecture",
    skills: ["User Flows", "Site Maps", "Navigation Design"],
  },
  {
    title: "Interaction Design",
    skills: ["Wireframing", "Prototyping", "Interaction States"],
  },
  {
    title: "UI Design",
    skills: [
      "Layout",
      "Typography",
      "Color Theory",
      "Visual Hierarchy",
      "Responsive Design",
    ],
  },
  {
    title: "Design Systems",
    skills: [
      "Components",
      "Variants",
      "Reusable Patterns",
      "Design Tokens",
    ],
  },
  {
    title: "Usability",
    skills: [
      "Usability Testing",
      "Task Analysis",
      "User Feedback",
      "Iterative Design",
    ],
  },
  {
    title: "Accessibility",
    skills: [
      "WCAG Principles",
      "Keyboard Navigation",
      "Color Contrast",
      "Accessible Forms",
    ],
  },
  {
    title: "Documentation",
    skills: [
      "Design Specifications",
      "UX Case Studies",
      "Handoff Documentation",
    ],
  },
];

const internshipHighlights = [
  "Built React.js front-end interfaces from requirements, working with senior developers and QA in Agile sprints.",
  "Implemented form input validation and structured error handling to improve interface reliability and user experience.",
  "Developed responsive, mobile-friendly interfaces using React.js, HTML5, and CSS3.",
  "Translated requirements into reusable React.js components with clear visual hierarchy and consistent styling.",
  "Collaborated with developers and QA to identify and resolve UI defects and usability issues.",
  "Incorporated feedback from sprint planning and review sessions to refine interfaces iteratively.",
];

const projects = [
  {
    title: "AccessAble",
    subtitle: "Accessibility-First Digital Experience Platform",
    description:
      "Designed an accessibility-focused interface to help teams identify and prioritize usability barriers.",
    tags: ["Figma", "FigJam", "axe DevTools", "WCAG Guidance"],
    highlights: [
      "Created user flows, wireframes, and interactive prototypes for accessibility issue management.",
      "Designed reusable components with clear focus states, accessible form patterns, and responsive layouts.",
      "Developed before-and-after interface comparisons to demonstrate proposed accessibility improvements.",
      "Conducted usability testing to identify navigation, form-validation, and information-clarity issues.",
      "Documented design decisions, accessibility considerations, and evaluation findings.",
    ],
  },
  {
    title: "MediFlow",
    subtitle: "Patient Appointment Experience Redesign",
    description:
      "Designed a patient-centered appointment booking experience for discovering healthcare providers and managing visits.",
    tags: ["Figma", "FigJam", "Interactive Prototyping"],
    highlights: [
      "Developed user journeys, information architecture, and task flows for appointment discovery and booking.",
      "Created responsive wireframes and high-fidelity prototypes for desktop and mobile experiences.",
      "Designed form-validation, error-prevention, confirmation, and rescheduling interactions.",
      "Conducted usability tests to identify friction points in appointment booking.",
      "Iterated on the interface using user feedback and documented the resulting design decisions.",
    ],
  },
];

const certifications = [
  {
    provider: "freeCodeCamp",
    title: "JavaScript Algorithms & DSA",
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
      <Icon
        aria-hidden="true"
        sx={{ color: colors.accent, fontSize: 19 }}
      />
    </Box>

    {href ? (
      <Box
        component="a"
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
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
          pt: { xs: "110px", md: "130px" },
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
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #F1EFFF 100%)",
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
                UI/UX Designer | Product Designer | UX Designer
              </Typography>

              <Typography
                sx={{
                  maxWidth: 700,
                  color: colors.secondary,
                  lineHeight: 1.9,
                  fontSize: "0.98rem",
                }}
              >
                I design clear, accessible digital experiences through user
                research, thoughtful interaction design, and iterative
                prototyping. My front-end development experience helps me
                connect design decisions with implementation, from responsive
                layouts and reusable components to form validation and
                developer handoff.
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
                  "User-Centered Design",
                  "Accessible Interfaces",
                  "Interactive Prototyping",
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
                  href={`${import.meta.env.BASE_URL}Ragul_UIUX_Resume.pdf`}
                  download="Ragul_UIUX_Resume.pdf"
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
                  {["React.js", "HTML5", "CSS3", "Responsive UI", "Agile"].map(
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
                    )
                  )}
                </Stack>
              </Card>
            </Box>

            <Box component="section" aria-labelledby="projects-heading">
              <SectionTitle
                id="projects-heading"
                eyebrow="Selected design work"
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
                  SB Matriculation Higher Secondary School, Musiri,
                  Trichy, Tamil Nadu
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

          {/* Contact, skills, certifications */}
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
                Design Skills
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

                    <Stack
                      direction="row"
                      useFlexGap
                      flexWrap="wrap"
                      gap={0.8}
                    >
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
                      <Divider
                        sx={{ mt: 2.5, borderColor: colors.border }}
                      />
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
                Published in the International Journal of Research
                Publication and Reviews (IJRPR), Volume 6, Issue 5, 2025.
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
            Thoughtful design. Clearer experiences.
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
            Let’s connect about UI/UX design, product experiences, and
            interfaces that put people first.
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