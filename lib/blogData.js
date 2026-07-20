export const heroPost = {
  slug: "state-of-us-early-stage-q1-2024",
  title: "The State of U.S. Early-Stage Venture & Startups: 1Q24",
  category: "Featured",
  date: "April 18, 2024",
  readTime: "5 min read",
  image: "/images/blog/hero-post.png",
  description: "Early-stage venture performance rebounded in Q1 2024, driven by a surge in late-stage markups and increased AI investments. Read the full report to understand the latest trends in the startup ecosystem.",
  content: `
Early-stage venture performance rebounded in Q1 2024, driven by a surge in late-stage markups and increased AI investments. This report dives deep into the metrics that define the current landscape.

### A Resurgence in Markups
After a challenging 2023, the first quarter of 2024 saw a stabilization in valuations. Startups that successfully conserved cash are now returning to market, often finding more receptive investors, particularly in sectors demonstrating clear paths to profitability.

### The AI Premium
Unsurprisingly, artificial intelligence remains the largest driver of early-stage capital. Valuations for seed and Series A AI startups are commanding significant premiums compared to their non-AI counterparts.

### Looking Ahead
While optimism is returning, the bar for subsequent funding rounds remains high. Founders are advised to maintain focus on efficient growth and robust unit economics.
  `
};

export const gridPosts = [
  {
    slug: "navigating-new-lp-landscape",
    title: "AngelList Confidential: Navigating the new LP landscape",
    category: "Insights",
    date: "April 10, 2024",
    readTime: "4 min read",
    image: "/images/blog/post-1.png",
    description: "An inside look at how Limited Partners are evaluating venture funds in the current macroeconomic environment.",
    content: `
The relationship between General Partners (GPs) and Limited Partners (LPs) is evolving. In this AngelList Confidential, we explore the new criteria LPs are using to evaluate emerging and established managers.

### Flight to Quality
LPs are increasingly consolidating their portfolios, focusing on managers with proven track records or highly differentiated, thesis-driven strategies.

### Increased Scrutiny on Distributions
With the IPO window showing only early signs of reopening, LPs are heavily scrutinizing DPI (Distributions to Paid-In Capital). Managers who can demonstrate a consistent ability to return capital are gaining significant favor.
    `
  },
  {
    slug: "structure-first-venture-fund",
    title: "How to structure your first venture fund",
    category: "Guides",
    date: "April 2, 2024",
    readTime: "8 min read",
    image: "/images/blog/post-2.png",
    description: "A comprehensive guide for emerging managers on the legal, operational, and structural considerations of launching a first fund.",
    content: `
Launching your first venture fund is a monumental task. Beyond raising capital, emerging managers must navigate a complex web of legal and operational requirements.

### Choosing the Right Legal Structure
Most U.S.-based venture funds utilize a Delaware Limited Partnership structure. This offers a recognized legal framework, liability protection for LPs, and pass-through taxation.

### Management Companies and General Partners
It is standard practice to separate the Management Company (which handles operations and employs staff) from the General Partner entity (which carries the liability of the specific fund).

### Working with AngelList
Platforms like AngelList offer comprehensive back-office solutions, streamlining fund formation, LP onboarding, and ongoing administration, allowing managers to focus on what matters most: investing.
    `
  },
  {
    slug: "impact-ai-seed-valuations",
    title: "The impact of AI on seed-stage valuations",
    category: "Data",
    date: "March 28, 2024",
    readTime: "6 min read",
    image: "/images/blog/post-3.png",
    description: "A data-driven analysis of how the artificial intelligence boom is distorting early-stage startup valuations.",
    content: `
The rapid advancement in generative AI has created a bifurcated market in early-stage venture capital. 

### The AI Valuation Premium
Our data indicates that startups utilizing AI as a core component of their product offering are raising seed rounds at valuations up to 40% higher than non-AI startups in similar sectors.

### Dilution Dynamics
While higher valuations are attractive to founders, they come with significant implications for dilution and the expectations set for subsequent funding rounds.

### The Long-Term View
Investors are paying these premiums with the expectation of outsized returns. Whether these AI-driven startups can grow into their valuations remains the defining question for the current vintage of venture funds.
    `
  }
];

export const allPosts = [heroPost, ...gridPosts];
