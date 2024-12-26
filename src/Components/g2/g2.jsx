import dados from "../../spotify_data_history.json";

export function G2() {
  const count = new Set(dados.map((e) => e.master_metadata_track_name));

export function G2({dados}) {
//G2) Ver quantas músicas diferentes já foram ouvidas no total.
  const count = new Set(dados.map((e)=>(e.master_metadata_track_name)));
    
    
  return <>
<<<<<<< HEAD
  {count.size}
=======
 {count.size}
>>>>>>> 16a0c700399162791e29da775c9ebab68ae072c9
  
  </>;
}
export default G2;