import Image from 'next/image'
const ImageSection = ({imageUrl}) => {
    return (
        <div className="col-span-12 md:col-span-6">
            <Image src={imageUrl} alt="" width={900}
                height={900}
                className="w-full h-full rounded-lg object-contain" />
        </div>
    )
}

export default ImageSection