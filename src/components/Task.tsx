import { Trash } from "@phosphor-icons/react";

export function Task({ content }: { content: string }) {

    return (
        <label htmlFor="check" className="bg-base-500 px-4 py-4 flex items-center justify-between gap-3 rounded-lg border border-base-400">
            <input type="checkbox" id="check" />
            <p className='text-sm font-normal text-base-100 leading-none select-none break-all'>
                {content}
            </p>
            <button className="hover:bg-base-400 hover:text-red-400 p-1 rounded text-base-300 transition-all">
                <Trash size={24} color="currentColor"/>
            </button>
        </label>
    )
}