import React, { useState } from "react";
import { Container, Row, Col, Button, Badge, Card, ButtonGroup } from "react-bootstrap";

const blogsData = [
  {
    id: 1,
    title: "The Future of Web Development",
    date: "June 20, 2025",
    category: "Tech",
    excerpt:
      "Explore the latest trends in web development, including modern frameworks, performance optimizations, and new JavaScript features...",
  },
  {
    id: 2,
    title: "Designing for Accessibility",
    date: "June 15, 2025",
    category: "Design",
    excerpt:
      "Learn how to create websites and apps that everyone can use. Accessibility is essential for inclusive design and better UX...",
  },
  {
    id: 3,
    title: "Boosting Productivity with React Hooks",
    date: "June 10, 2025",
    category: "Tech",
    excerpt:
      "Discover how React hooks can simplify your code and improve state management in your projects...",
  },
  {
    id: 4,
    title: "Minimalist UI Trends in 2025",
    date: "June 5, 2025",
    category: "Design",
    excerpt:
      "Minimalism remains a top UI trend. Learn how to implement clean, functional interfaces with impactful typography and whitespace...",
  },
  {
    id: 5,
    title: "Effective Remote Team Management",
    date: "May 30, 2025",
    category: "Business",
    excerpt:
      "Managing remote teams comes with unique challenges. Discover best practices to keep your team productive and motivated.",
  },
  {
    id: 6,
    title: "SEO Best Practices for Modern Websites",
    date: "May 25, 2025",
    category: "Marketing",
    excerpt:
      "SEO is evolving fast. Get up to date with strategies to improve your site ranking in 2025.",
  },
];

const categories = ["All", ...Array.from(new Set(blogsData.map((b) => b.category)))];

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter((b) => b.category === selectedCategory);

  return (
    <section className="bg-dark text-light py-5">
      <Container>
        {/* Section Header */}
        <div className="mb-4 text-center">
          <h6 className="text-info fw-bold">BLOG</h6>
          <h2 className="fw-bold">Latest Articles & Insights</h2>
          <p className="text-muted">
            Stay updated with our latest news, tutorials, and tips from industry experts.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="d-flex justify-content-center mb-4">
          <ButtonGroup>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "info" : "outline-info"}
                onClick={() => setSelectedCategory(cat)}
                className="text-uppercase fw-semibold"
              >
                {cat}
              </Button>
            ))}
          </ButtonGroup>
        </div>

        {/* Blogs Grid */}
        <Row className="g-4">
          {filteredBlogs.map(({ id, title, date, category, excerpt }) => (
            <Col key={id} xs={12} md={6} lg={4}>
              <Card
                className="h-100 text-light shadow-sm"
                style={{
                  backgroundColor: "#1c1c1e",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  maxWidth: "95%",
                  margin: "0 auto",
                  borderRadius: "8px",
                }}
              >
                <Card.Body className="d-flex flex-column">
                  <Badge bg="info" className="mb-2 align-self-start text-uppercase">
                    {category}
                  </Badge>
                  <Card.Title className="fw-bold">{title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                  <Card.Text className="flex-grow-1">{excerpt}</Card.Text>
                  <Button variant="outline-info" className="mt-auto align-self-start">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          {filteredBlogs.length === 0 && (
            <Col>
              <p className="text-center text-muted">
                No articles found for "{selectedCategory}"
              </p>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default Blog;
