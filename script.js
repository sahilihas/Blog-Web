const blogs = [
    // Technology Blogs
    {
      title: "The Future of AI: How It Will Shape Our World",
      body: "Artificial Intelligence is expected to revolutionize industries, from healthcare to entertainment. In this post, we explore the future of AI and how it will impact daily life and business operations.",
      category: "Technology",
      url: "https://builtin.com/artificial-intelligence/artificial-intelligence-future"
    },
    {
      title: "5G: What It Means for the Internet of Things",
      body: "The rollout of 5G technology is set to accelerate the growth of the Internet of Things (IoT). In this post, we discuss how 5G will enable smart cities, autonomous vehicles, and connected homes.",
      category: "Technology",
      url: "https://sd2.findanswersfast.com/5g-business-internet-the-future-of-connectivity-for-your-company?channel=samosa_1456&network=somo132&campaignid=21998085243&gad_source=1&gclid=EAIaIQobChMIsuyR8dObigMVrqZmAh1sgR24EAAYASAAEgJMhfD_BwE"
    },
    {
      title: "Blockchain Beyond Cryptocurrency",
      body: "While blockchain is often associated with cryptocurrencies, its applications extend far beyond that. This post explores how blockchain is being used in supply chains, voting systems, and digital identity verification.",
      category: "Technology",
      url: "https://www.researchgate.net/publication/339838338_Blockchain_Research_Beyond_Cryptocurrencies"
    },
  
    // Health Blogs
    {
      title: "10 Tips for a Healthier Lifestyle",
      body: "A healthy lifestyle doesn't have to be complicated. In this post, we share 10 simple and actionable tips to improve your overall health and well-being.",
      category: "Health",
      url: "https://www.psfc.in/10-healthy-lifestyle-tips/"
    },
    {
      title: "The Importance of Mental Health During a Pandemic",
      body: "Mental health has become a top priority during the pandemic. This post highlights the importance of mental health awareness and offers practical advice for maintaining mental well-being during tough times.",
      category: "Health",
      url: "https://scholarworks.waldenu.edu/cgi/viewcontent.cgi?article=17554&context=dissertations"
    },
    {
      title: "How to Stay Hydrated: Myths vs. Facts",
      body: "Staying hydrated is essential for health, but how much water should you drink? In this post, we break down common hydration myths and provide facts on how much water your body really needs.",
      category: "Health",
      url: "https://example.com/blog/hydration-myths-facts"
    },
  
    // Lifestyle Blogs
    {
      title: "Minimalism: How to Start Living a Simpler Life",
      body: "Minimalism is about living with less, but getting more in return. In this post, we explain how to start simplifying your life, decluttering your space, and focusing on what truly matters.",
      category: "Lifestyle",
      url: "https://www.becomingminimalist.com/soon-as-you-can/"
    },
    {
      title: "The Art of Time Management: How to Maximize Productivity",
      body: "Time management is crucial for balancing work and life. In this blog, we share effective strategies to organize your time and increase productivity, ensuring a healthy work-life balance.",
      category: "Lifestyle",
      url: "https://example.com/blog/time-management"
    },
    {
      title: "5 Ways to Boost Your Creativity",
      body: "Creativity isn't just for artists. Whether you're an entrepreneur or a student, being creative can enhance problem-solving and innovation. In this post, we discuss 5 ways to boost your creativity.",
      category: "Lifestyle",
      url: "https://example.com/blog/boost-creativity"
    },
  
    // Business Blogs
    {
      title: "How to Build a Strong Brand Identity",
      body: "A strong brand identity helps businesses stand out in a competitive market. This blog post explains how to define your brand, create a compelling logo, and connect with your target audience.",
      category: "Business",
      url: "https://brand24.com/blog/brand-identity/"
    },
    {
      title: "The Importance of Customer Feedback in Business Growth",
      body: "Customer feedback is a goldmine for businesses looking to improve. In this blog, we explain how to collect, analyze, and act on customer feedback to drive business growth and innovation.",
      category: "Business",
      url: "https://example.com/blog/customer-feedback"
    },
    {
      title: "Navigating Remote Work: Tips for Employers and Employees",
      body: "With remote work becoming more common, it's important to adapt to this new way of working. In this post, we discuss tips for both employers and employees to successfully navigate remote work.",
      category: "Business",
      url: "https://example.com/blog/remote-work-tips"
    }
  ];
  
  // script.js or inside a <script> tag
particlesJS("particles-js", {
    particles: {
      number: {
        value: 100, // number of particles
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff" // particle color
      },
      shape: {
        type: "circle", // shape of particles
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.5, // particle opacity
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1
        }
      },
      size: {
        value: 3, // size of particles
        random: true,
        anim: {
          enable: true,
          speed: 40,
          size_min: 0.1
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff", // line color
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse" // effect on hover (particles will move away from cursor)
        },
        onclick: {
          enable: true,
          mode: "push" // add more particles on click
        }
      }
    },
    retina_detect: true
  });
  
  
  // Function to display blogs based on search and category filter
  function displayBlogs() {
    const searchInput = document.getElementById("search-box").value.toLowerCase();
    const selectedFilter = document.getElementById("filter").value.toLowerCase();
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    window.onload = function() {
        document.getElementById("welcome-text").style.animationPlayState = "running";
      };
      
  
    // Filter blogs based on search input and selected category
    const filteredBlogs = blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchInput) || blog.body.toLowerCase().includes(searchInput);
      const matchesCategory =
        selectedFilter === "" || blog.category.toLowerCase() === selectedFilter;  // Check if category matches
      return matchesSearch && matchesCategory;
    });
  
    // Display the filtered blogs
    if (filteredBlogs.length > 0) {
      filteredBlogs.forEach((blog) => {
        const resultItem = document.createElement("div");
        resultItem.className = "result-item";
        resultItem.innerHTML = `
          <h2>${blog.title}</h2>
          <p>${blog.body}</p>
          <a href="${blog.url}" target="_blank">Read more</a>
        `;
        resultsContainer.appendChild(resultItem); // Add the blog to the results container
      });
    } else {
      resultsContainer.innerHTML = "<p class='placeholder'>No blogs found. Try a different search or category!</p>";
    }
  }
  
  // Event listener for search input and category filter
  document.getElementById('search-box').addEventListener('keyup', displayBlogs);  // Trigger filtering on keyup (search)
  document.getElementById('filter').addEventListener('change', displayBlogs);  // Trigger filtering on category selection
  
  // Initial display of blogs when the page loads
  window.onload = displayBlogs;
  
