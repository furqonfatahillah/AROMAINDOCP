import React, { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Data gambar gallery
  const galleryImages = [
    // {
    //   id: 1,
    //   category: "facility",
    //   title: "Distillation Facility",
    //   image: "/images/gallery/distillation.jpg", // Ganti dengan path gambar Anda
    //   aos: "fade-up"
    // },
    // {
    //   id: 2,
    //   category: "plantation",
    //   title: "Patchouli Plantation",
    //   image: "/images/gallery/plantation.jpg",
    //   aos: "fade-up"
    // },
    {
      id: 1,
      category: "product",
      title: "Premium Patchouli Oil",
      image: "/galery1.jpeg",
      aos: "fade-up",
    },
    {
      id: 2,
      category: "product",
      title: "Premium Patchouli Oil",
      image: "/galery2.jpeg",
      aos: "fade-up",
    },
    {
      id: 3,
      category: "product",
      title: "Premium Patchouli Oil",
      image: "/galery3.jpeg",
      aos: "fade-up",
    },
    {
      id: 4,
      category: "product",
      title: "Premium Patchouli Oil",
      image: "/galery4.jpeg",
      aos: "fade-up",
    },
    {
      id: 5,
      category: "product",
      title: "Premium Patchouli Oil",
      image: "/galery5.jpeg",
      aos: "fade-up",
    },
    {
      id: 6,
      category: "product",
      title: "Premium Patchouli Oil",
      image: "/galery6.jpeg",
      aos: "fade-up",
    },
    {
      id: 7,
      category: "product",
      title: "Premium Patchouli Oil",
      image: "/galery7.jpeg",
      aos: "fade-up",
    },
    {
      id: 8,
      category: "product",
      title: "Premium Patchouli Oil",
      image: "/galery8.jpeg",
      aos: "fade-up",
    },
    {
      id: 9,
      category: "product",
      title: "Premium Patchouli Oil",
      image: "/galery9.jpeg",
      aos: "fade-up",
    },
    {
      id: 10,
      category: "product",
      title: "Premium Patchouli Oil",
      image: "/galery10.jpeg",
      aos: "fade-up",
    },
    {
      id: 11,
      category: "team",
      title: "Premium Patchouli Oil",
      image: "/galery11.jpeg",
      aos: "fade-up",
    },
    {
      id: 12,
      category: "product",
      title: "Premium Patchouli Oil",
      image: "/galery12.jpeg",
      aos: "fade-up",
    },
    {
      id: 13,
      category: "product",
      title: "Premium Patchouli Oil",
      image: "/galery13.jpeg",
      aos: "fade-up",
    },
    {
      id: 14,
      category: "product",
      title: "Premium Patchouli Oil",
      image: "/galery14.jpeg",
      aos: "fade-up",
    },
    {
      id: 15,
      category: "product",
      title: "Premium Patchouli Oil",
      image: "/galery15.jpeg",
      aos: "fade-up",
    },
    // {
    //   id: 4,
    //   category: "facility",
    //   title: "Quality Control Lab",
    //   image: "/images/gallery/lab.jpg",
    //   aos: "fade-up"
    // },
    // {
    //   id: 5,
    //   category: "plantation",
    //   title: "Harvesting Process",
    //   image: "/images/gallery/harvest.jpg",
    //   aos: "fade-up"
    // },
    // {
    //   id: 6,
    //   category: "product",
    //   title: "Export Packaging",
    //   image: "/images/gallery/packaging.jpg",
    //   aos: "fade-up"
    // },
    // {
    //   id: 7,
    //   category: "facility",
    //   title: "Storage Warehouse",
    //   image: "/images/gallery/warehouse.jpg",
    //   aos: "fade-up"
    // },
  ];

  // Kategori filter
  const categories = [
    { id: "all", label: "All" },
    { id: "facility", label: "Facility" },
    { id: "plantation", label: "Plantation" },
    { id: "product", label: "Product" },
    { id: "team", label: "Team" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  // Filter gambar berdasarkan kategori
  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // Handle modal
  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="gallery"
      style={{
        padding: "80px 0",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decoration */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(182,139,64,0.03) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(26,62,63,0.03) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h5
            style={{
              color: "#b68b40",
              fontSize: "1rem",
              fontWeight: "600",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "15px",
            }}
          >
            Our Gallery
          </h5>
          <h2
            style={{
              color: "#1a3e3f",
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "15px",
            }}
          >
            A Glimpse Into Our World
          </h2>
          <p
            style={{
              color: "#6c757d",
              fontSize: "1.1rem",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Explore our facilities, plantations, and the people behind our
            premium patchouli oil
          </p>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#b68b40",
              margin: "20px auto 0",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Category Filter */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
          data-aos="fade-up"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              style={{
                backgroundColor:
                  activeCategory === category.id ? "#b68b40" : "transparent",
                color: activeCategory === category.id ? "white" : "#1a3e3f",
                border:
                  activeCategory === category.id
                    ? "2px solid #b68b40"
                    : "2px solid #1a3e3f",
                padding: "10px 25px",
                borderRadius: "50px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category.id) {
                  e.currentTarget.style.backgroundColor = "#1a3e3f";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.borderColor = "#1a3e3f";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category.id) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#1a3e3f";
                  e.currentTarget.style.borderColor = "#1a3e3f";
                }
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Hanya Gambar */}
        <div className="row g-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos={image.aos}
              data-aos-delay={index * 50}
            >
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  aspectRatio: "1/1",
                  backgroundColor: "#f8f9fa",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 30px rgba(26,62,63,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0,0,0,0.1)";
                }}
                onClick={() => openModal(image)}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x400?text=Image+Not+Found";
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Modal untuk Lihat Gambar Lebih Besar */}
        {selectedImage && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.9)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
            onClick={closeModal}
          >
            <div
              style={{
                position: "relative",
                maxWidth: "800px",
                width: "100%",
                maxHeight: "80vh",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/800x600?text=Image+Not+Found";
                }}
              />

              {/* Close Button */}
              <button
                onClick={closeModal}
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "0",
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                  fontSize: "2rem",
                  cursor: "pointer",
                  padding: "10px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#b68b40";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "white";
                }}
              >
                ✕
              </button>

              {/* Title (optional - bisa dihapus jika tidak ingin) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-40px",
                  left: "0",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                {selectedImage.title}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
