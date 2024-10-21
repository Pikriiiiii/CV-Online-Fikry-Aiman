export default function RowRiwayat(props:any){
    return(
        <div className="border-2 border-indigo-400/75 rounded-lg bg-yellow-500 p-2 my-5">
        <div className="container mx-auto">
        <div className="grid grid-flow-cols-12 gap-1">
        <div className="col-span-12 md:col-span-3">{props.jenjang}</div>
        <div className="col-span-12 md:col-span-3">{props.sekolah}</div>
        <div className="col-span-12 md:col-span-3">{props.tahun}</div>
        <div className="col-span-12 md:col-span-3">{props.perusahaan}</div>
        <div className="col-span-12 md:col-span-3">{props.position}</div>
        <div className="col-span-12 md:col-span-3">{props.year}</div>
        </div>
        </div>
        </div>
        
    )
}