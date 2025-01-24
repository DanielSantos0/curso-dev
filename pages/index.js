function Home() {
    const imgurEmbed = `
        <blockquote class="imgur-embed-pub" lang="en" data-id="a/bSqMWuO">
            <a href="//imgur.com/a/bSqMWuO">kbcinha 2/16</a>
        </blockquote>
        <script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
    `;

    return (
        <div>
            <h1>n tem jeito, vo te q zua</h1>
            <div dangerouslySetInnerHTML={{ __html: imgurEmbed }} />
        </div>
    );
}

export default Home;
