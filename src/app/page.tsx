// All components in 'app/' are by **default** NextJS server components.
// "use server";

import HelloWorld from "@components/HelloWorld.tsx";

function Page() {
    return (
        <div className={"h-screen flex flex-row justify-center items-center"}>
            <HelloWorld />
        </div>
    );
}

export default Page;
