import Axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import Helper from '../auth/Helper';
import paginationFactory from "react-bootstrap-table2-paginator";
import Sidebar_inner from './Sidebar_Inner';
import Api from '../Api';
import '../App.css';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';


function Payments() {
 
  const selectOptions = {

    0: "Success",
    1: "Sent to gateway",
    2: "Success",
    3:"Fail",
  };

  const columns = [


    
   { dataField: "key", text: "#", sort: true, style:{width: '2%'}, 
   headerStyle: (colum, colIndex) => {
    return { width: '2%'};  
  } 
  },
  { dataField: "orderAmount", text: "Amount", sort: true,style:{width: '10%'},
  headerStyle: (colum, colIndex) => {
    return { width: '10%' };
  }  
},
    { dataField: "paymentMode", text: "Payment Mode", sort: true,style:{width: '10%'},
    headerStyle: (colum, colIndex) => {
      return { width: '10%' };
    }  
  },
    { dataField: "razorpay_payment_id", text: "Transaction Id", sort: true,
    style:{width: '12%'},
    headerStyle: (colum, colIndex) => {
      return { width: '12%' };
    }  
   },
    { dataField: "created_at", text: "Payment Date", sort: true,
    style:{width: '12%'},
    headerStyle: (colum, colIndex) => {
      return { width: '12%' };
    }  
  },
    { dataField: "payment_status", text: "Payment Status", sort: true,
    style:{width: '12%'},
    headerStyle: (colum, colIndex) => {
      return { width: '12%' };
    }  ,
    formatter: cell => selectOptions[cell],
    filter: selectFilter({
      options: selectOptions,
      style: { display: 'none' },
    }),
  },
];
   const [tableData, setTableData] = useState({blogs: []});
   const [userId,setUserId] = useState(0); 
   useEffect(async()=>{
       await Helper.getAtuhData().then((result)=>{
         let userId = result.id;
           setUserId(userId);
           Api.getUsersPaymentList(userId).then(
             (response)=>{
               console.log("response.data.data==",response.data.data);
               let table = response.data.data;
               setTableData(table);
               localStorage.setItem('data', JSON.stringify(table));
             }
         );
       });
       
   }, [setUserId,setTableData]);  
 const pagination = paginationFactory({ 
    page: 1,
    sizePerPage: 10,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",  
    prePageText: "<",
    className: "pagination",
    alwaysShowAllBtns: true,
    hideSizePerPage: true,
      hidePageListOnlyOnePage: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    }
  });

  return (
    <>


<div className="take_admin_main_wrapper">
                <Sidebar_inner />


                <div class="take_top_header">
                <div class="take_topheader_inner">
                    <div class="take_logo d-none ">
                        <a href="#">
                            <img src="assets/images/logo.png" alt=""/>
                        </a>
                    </div>
                    <span class="take_toggle d-none "><img src="assets/images/toggle.png" alt=""/></span>
                    <div class="take_search_wrapper d-none">
                        <input type="text" name="" id="" class="form-control" placeholder="Search instruments, teachers"/>
                        <span><img src="assets/images/svg/search.svg" alt=""/></span>
                    </div>
                </div>

                <h2 class="take_title h2">Payment History</h2>
            </div>
            <div class="take_body take_changepass_wrapper">
               
            <BootstrapTable
                bootstrap4
                keyField="id"
                classes="tableBody"
                wrapperClasses="tableBootstrap"
                headerClasses="tableHeader"   
                data={tableData}
                columns={columns}
                striped
                hover
                pagination={pagination }
                filter={ filterFactory() }
              />



            </div>

               

                </div>




      
</>   
  );
} 
export default Payments;


