import {useRef} from "react";

const Tableau = () => {

  const {tableau} = window as any;
  const url = "https://public.tableau.com/app/profile/chris.gerrard/viz/RegionalSampleWorkbook/Storms"
  const ref = useRef(null)

  function initViz() {
    console.log("initViz")
    new tableau.Viz(ref.current, url)

  }


  initViz()
  return (

    <div>
      <p>Tableau!</p>
      <div ref={ref}></div>
    </div>
  )
}
export default Tableau
