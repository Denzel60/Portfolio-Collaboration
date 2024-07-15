import "./Blogs.css"

function Blogs() {
    const blogs = [
        {
        id: 1,
        title: "UI Interactions of the week",
        date:"12 Feb 2019",
        technology:"Express, Handlebars",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem aut ducimus similique sed est nesciunt, minus ullam facere voluptate rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nesciunt maxime aliquid, minus autem perferendis."
    },
    {
        id: 1,
        title: "UI Interactions of the week",
        date:"12 Feb 2019",
        technology:"Express, Handlebars",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem aut ducimus similique sed est nesciunt, minus ullam facere voluptate rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nesciunt maxime aliquid, minus autem perferendis."
    },
    {
        id: 1,
        title: "UI Interactions of the week",
        date:"12 Feb 2019",
        technology:"Express, Handlebars",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem aut ducimus similique sed est nesciunt, minus ullam facere voluptate rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nesciunt maxime aliquid, minus autem perferendis."
    
    },
        {
        id: 1,
        title: "UI Interactions of the week",
        date:"12 Feb 2019",
        technology:"Express, Handlebars",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem aut ducimus similique sed est nesciunt, minus ullam facere voluptate rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nesciunt maxime aliquid, minus autem perferendis."
    
    }
]
    return (
        <section className="blog">
            <h1>Blog</h1>
            <div className="blog-container">
                {blogs.map((blog) => (
                    <div className="blogs" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <h4>{blog.date} | <span className="tech">{blog.technology}</span> </h4>
                        <p>{blog.description}</p>

                        </div>
                ))}
            </div>

        </section>
    )
}

export default Blogs