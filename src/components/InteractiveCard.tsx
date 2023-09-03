"use client"

export default function InteractiveCard({children}: {children: React.ReactNode}) {
    function onMouseAction(event: React.SyntheticEvent) {
        if (event.type == 'mouseover') {
            event.currentTarget.classList.remove('shadow-[0px_0px_20px_3px_#000000]')
            event.currentTarget.classList.add('shadow-[0px_0px_20px_10px_#000000]')

            event.currentTarget.classList.remove('bg-white')
            event.currentTarget.classList.add('bg-neutral-200')
        } else {
            event.currentTarget.classList.remove('shadow-[0px_0px_20px_10px_#000000]')
            event.currentTarget.classList.add('shadow-[0px_0px_20px_3px_#000000]')

            event.currentTarget.classList.remove('bg-neutral-200')
            event.currentTarget.classList.add('bg-white')
        }
    }

    return (
        <div className='w-auto h-auto mt-44 mb-10 shadow-[0px_0px_20px_3px_#000000] bg-white'
        onMouseOver={(e) => onMouseAction(e)}
        onMouseOut={(e) => onMouseAction(e)}>
            {children}
        </div>
    )
}