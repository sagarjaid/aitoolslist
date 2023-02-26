import Cardv2 from '@/components/Cardv2';
import React from 'react'

const ToolsList = ({ data, query, TagName }) => {

    const handleRandom = () => {
        const suffleData = data;
        suffleData.sort(() => Math.random() - 0.5);
        window.open(`/tool/${data[0].slug}`)
    }

    return (
        <main className="flex flex-col mx-auto max-w-7xl gap-12 s:p-3 xs:px-4">
            <nav className="flex row justify-between items-center py-4">
                <a href="/">
                    <span className="font-medium smd:text-xl py-2 px-4 text-white bg-black cursor-pointer rounded-full rounded-tl-sm ">
                        AiToolsList
                    </span>
                </a>
                <span>
                    <ul className="flex row gap-4 cursor-pointer">
                        <li onClick={handleRandom} className="hover:font-semibold">
                            {/* <a href="/tool/t"> */}
                            <svg
                                className="w-6 text-blue-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.5}
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                />
                            </svg>
                            {/* </a> */}
                        </li>
                        <li className="hover:font-semibold text-sm px-3 py-1 border border-black rounded-full">
                            <a href="https://tally.so/r/n0d8bZ" target="_blank">submit</a>
                        </li>
                    </ul>
                </span>
            </nav>
            <div >
                {data[0] && <h1 className='text-2xl'>TOP {TagName} AI TOOLS LIST</h1>}
            </div>
            <div className="flex flex-wrap">
                {data ? (
                    data.map((item) => {
                        return (
                            <Cardv2
                                key={item.id}
                                item={item}
                                name={item.name}
                                website={item.website}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                tag1={item.tag1}
                                tag2={item?.tag2}
                                tag3={item?.tag3}
                                tag4={item?.tag4}
                                url={item.url}
                                icon={item.icon}
                                slug={item.slug}
                                upvote={item.upvote}
                                id={item.id}
                            />
                        );
                    })
                ) : (
                    <div className="text-lg text-center w-full mt-6">Loading...</div>
                )}
                {!data[0] && <div className="text-lg text-center h-screen flex flex-col justify-center items-center w-full">NO DATA FOUND!</div>}
            </div>
        </main>
    )
}

export async function getServerSideProps(context) {
    const urlPrams = context.query["tag"];

    const TagsList = [
        { name: "search", url: "search-engine-ai" },
        { name: "productivity", url: "productivity-ai" },
        { name: "legal", url: "legal-ai" },
        { name: "education", url: "education-ai" },
        { name: "resume", url: "resume-ai" },
        { name: "job", url: "job-ai" },
        { name: "professional networking", url: "professional-networking-ai" },
        { name: "noise cancellation", url: "noise-cancellation-ai" },
        { name: "ai model generation", url: "ai-model-generation-ai" },
        { name: "FREE", url: "free" },
        { name: "PAID", url: "paid" },
        { name: "FREEMIUM", url: "freeminum" },
        { name: "chat", url: "chat-ai" },
        { name: "copywriting", url: "copywriting-ai" },
        { name: "design", url: "design-ai" },
        { name: "content", url: "content-ai" },
        { name: "video", url: "video-ai" },
        { name: "audio", url: "audio-ai" },
        { name: "image", url: "image" },
        { name: "writing assistant", url: "writing-assistant-ai" },
        { name: "code", url: "code-ai" },
        { name: "avatar", url: "avatar-gnration-ai" },
        { name: "career", url: "career-ai" },
        { name: "marketing", url: "marketing-ai" },
        { name: "conversational", url: "conversational-ai" },
        { name: "project management", url: "project-management-ai" },
        { name: "news", url: "news-ai" },
        { name: "resume", url: "resume-ai" },
        { name: "job", url: "job-ai" },
    ];

    const query = TagsList.filter((el) => el.url == urlPrams)
    const tag = query[0]?.name
    const TagName = tag?.toUpperCase()

    let url = `https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/aitoolslist/data`
    const res = await fetch(url);
    const resdata = await res.json();

    let tagsDATA = []

    resdata.data.filter((el) => {
        if (el.tags.includes(tag)) {
            return tagsDATA.push(el)
        }
    });

    const data = tagsDATA;
    return { props: { data, query, TagName } };
}

export default ToolsList