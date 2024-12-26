import dados from "../../spotify_data_history.json";

export function G2() {
  const count = new Set(dados.map((e) => e.master_metadata_track_name));

  return <>
  {count.size}
  
  </>;
}
export default G2;