import { useEffect } from 'react'
export default function LoadJS(){


    useEffect(()=>{
        async function importJs(){
            await import('../../../assets/vendor/jquery/jquery.min.js')
            await import('../../../assets/vendor/chart.js/Chart.min.js')
            import('../../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js')
            import('../../../assets/vendor/jquery-easing/jquery.easing.min.js')
            import('../../../assets/js/sb-admin-2.min.js')
            import('../../../assets/js/demo/chart-area-demo.js')
            import('../../../assets/js/demo/chart-pie-demo.js')

            // await import('../../../assets/vendor/datatables/jquery.dataTables.js')
            // await import('../../../assets/vendor/datatables/dataTables.bootstrap4.js')        
            // import('../../../assets/js/demo/datatables-demo.js')

            
        }
        importJs();   
        
    },[])
    // render(<></>)
}
