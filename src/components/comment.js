import { useEffect, useRef } from "react";

export default function Comment() {
    const commentsEl = useRef(null);

    useEffect(() => {
        if (commentsEl.current?.children.length > 0) {
            return;
        }

        const scriptEl = document.createElement("script");
        scriptEl.src = "https://utteranc.es/client.js";
        scriptEl.async = true;
        scriptEl.setAttribute("repo", "dijeungi/Resume_Website");
        scriptEl.setAttribute("issue-term", "pathname");
        scriptEl.setAttribute("theme", "github-light");
        scriptEl.setAttribute("crossorigin", "anonymous");

        commentsEl.current.appendChild(scriptEl);
    }, []);

    return <div ref={commentsEl} />;
}
