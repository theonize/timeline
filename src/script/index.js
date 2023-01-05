window.addEventListener('load', async(event)=>{
  const data = await fetch('/data/test.json')
  .then(res=>res.json())
  .catch(console.error)


  d3.select('svg')
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
      .attr('fill', 'black')
      .attr('cx', d=>d.length)
      .attr('cy', d=>50*d.day)
      .attr('r', 50)
      .on('click', (d,i,l)=>{
        
      })
})