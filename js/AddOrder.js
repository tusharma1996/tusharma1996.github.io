$(document).ready(function(){
    const Url = "https://193.168.0.199:3000/api/delivery.PlaceOrder";


    $('.btn-primary').click(function(){
        var data = $('#AddOrder').serializeArray()
        var order = {"$class":"delivery.Order",
                     "holder":"resource:delivery.Warehouse#WarehouseGurgaon",
                     "orderId":"Order"+Math.floor((Math.random()*1000000) + 1),
                     "statusId": 2,
                     "orderLocationAddress": "38/6, Delhi - Jaipur Expy, Mohammed Pur, Khandsha, Sector 37, Gurugram, Haryana 122004",
                     "currentLocationReached":"North Warehouse"
                    }
        for(obj of data){
            order[obj.name] = obj.value; 
        }

        var correctData = {"$class":"delivery.PlaceOrder",
        "holderId": "Transporter"+ Math.floor((Math.random()*1000) + 1),
        "order":order
     }

        $.ajax({
            url: Url,
            type: "POST",
            data: correctData,
            success: function(result){
               // console.log(data)
                console.log(result);
                alert('Order Placed');
                location.reload();
            },
            error:function(error){
                console.log(correctData)
                console.log(error.responseText)
            }
        })        
    })
    $('.btn-secondary').click(function(){
        location.reload();
    })
})
    /**
    $('#ViewAllOrder').click(function(){
        
        $.ajax({
            url: Url,
            type: "GET",
            success: function(result){               
                
                console.log(result);
                var data = result;
                var htmlText = ' '
                for (var key in data){

                htmlText += '<table><tbody">'
                htmlText += '<tr><th>Product Id:&nbsp&nbsp</th>' + '<td>'+ data[key].id + '</td><td>&nbsp&nbsp&nbsp &nbsp</td></tr>';
                htmlText += '<tr><th>Pincode:&nbsp&nbsp</th>' + '<td>'+ data[key].pincode + '</td><td>&nbsp&nbsp&nbsp&nbsp </td></tr>';
                htmlText += '<tr><th>Buyer Region:&nbsp&nbsp</th>' + '<td>'+ data[key].buyerRegion + '</td><td>&nbsp&nbsp&nbsp&nbsp  </td></tr>';
                htmlText += '<tr><th>Buyer State:&nbsp&nbsp</th>' + '<td>'+ data[key].buyerState + '</td><td>&nbsp&nbsp&nbsp&nbsp  </td></tr>';
                htmlText += '<tr><th>Order Number:&nbsp&nbsp</th>' + '<td>'+ data[key].orderNo+ '</td><td>&nbsp&nbsp&nbsp&nbsp  </td></tr>';
                htmlText += '<tr><th>Order DateTime:&nbsp&nbsp</th>' + '<td>'+ data[key].orderDateTime + '</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Order Location Latitude:&nbsp&nbsp</th>' + '<td>'+ data[key].orderLocationLat +'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Order Location Longitude:&nbsp&nbsp</th>' + '<td>'+ data[key].orderLocationLng+'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Order Location Address:&nbsp&nbsp</th>' + '<td>'+ data[key].orderLocationAddress+'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Description:&nbsp&nbsp</th>' + '<td>'+ data[key].description +'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Qr Code Text:&nbsp&nbsp</th>' + '<td>'+ data[key].qrCodeText+'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Buyer Name:&nbsp&nbsp</th>' + '<td>'+ data[key].buyerName +'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Buyer Address:&nbsp&nbsp</th>' + '<td>'+ data[key].buyerAddress +'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Shipper Name:&nbsp&nbsp</th>' + '<td>'+ data[key].shipperName +'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Shipper Address:&nbsp&nbsp</th>' + '<td>'+ data[key].shipperAddress +'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Buyer City:&nbsp&nbsp</th>' + '<td>'+ data[key].buyerCity +'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Seller City:&nbsp&nbsp</th>' + '<td>'+ data[key].sellerCity +'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Seller Address:&nbsp&nbsp</th>' + '<td>'+ data[key].sellerAddress +'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Seller Location Latitude:&nbsp&nbsp</th>' + '<td>'+ data[key].sellerLocationLng +'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Seller Location Longitude:&nbsp&nbsp</th>' + '<td>'+ data[key].sellerLocationLat +'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Shipping Service</th>' + '<td>'+ data[key].shippingService +'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Contact Number:&nbsp&nbsp</th>' + '<td>'+ data[key].contactNo+'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th>Current Location:&nbsp&nbsp</th>' + '<td>'+ data[key].currentLocationReached +'</td><td>&nbsp&nbsp&nbsp&nbsp</td></tr>';
                htmlText += '<tr><th><br/></th>' + '<td></td><td></td></tr></tbody></table><p></p>';

                }
              //   document.getElementById('BTN').innerHTML = "<button id='btn' type='button'>Reset</button>"
            /*     
                $('.row').append(htmlText)
                $('#btn').click(function(){
                    location.reload();
                })
            
            document.getElementById('ListOrder').innerHTML = htmlText
            document.getElementById('change1').innerHTML = "All Orders"
            document.getElementById('change2').innerHTML = "Order Details"
            document.getElementById('change3').innerHTML = " "
            },
            error:function(error){
                console.log(error.responseText)
            }

        })        
    })
    */
