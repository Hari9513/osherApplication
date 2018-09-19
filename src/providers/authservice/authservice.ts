import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const apiUrl: string = 'http://localhost:8000/api/user/';
const loginUrl: string = 'http://localhost:8000/api/login/';
const forgotUrl: string = 'http://localhost:8000/api/forgotpassword';
const passwordUrl: string = 'http://localhost:8000/api/updatepassword';
const stockUrll: string = 'http://localhost:8000/api/stock';
const emailUrl: string = 'http://localhost:8000/api/emailexist';
const phoneUrl: string = 'http://localhost:8000/api/phoneexist';
const stockStatus: string = 'http://localhost:8000/api/stockstatus';
const orderHistory: string = 'http://localhost:8000/api/orderhistory';
const SeparateOrder: string = 'http://localhost:8000/api/separateorder';
const couponUrl: string = 'http://localhost:8000/api/coupon/';
const walletUrl: string = 'http://localhost:8000/api/wallet/';
const UserStatusUpdateUrl: string = 'http://localhost:8000/api/userstatusupdate';
const myHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Autherzation': localStorage.getItem('User')
  })
}

/*
  Generated class for the AuthserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthserviceProvider {

  constructor(public httpClient: HttpClient) {
    console.log('Hello AuthserviceProvider Provider');
  }

  forgot(user){
    return this.httpClient.put(forgotUrl, user)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }

  orderHistory(){
    return this.httpClient.get(orderHistory, myHeaders)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }

  getUserDataByEmail(data){
    console.log(data);
    return this.httpClient.put(emailUrl, data)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }

  addOrder(order){
    console.log(order)
    return this.httpClient.post(orderHistory, order)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }

  
  addWallet(wallet){
    console.log(wallet)
    return this.httpClient.post(walletUrl, wallet)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }

  upload(formData){
    return this.httpClient.post(`${stockUrll}/upload`, formData)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  uploadImage(formData, id){
    return this.httpClient.post(`${apiUrl}uploadImage`, formData, id)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  otpCheck(user){
    return this.httpClient.post(forgotUrl, user)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }

  phoneExist(user){
    return this.httpClient.post(phoneUrl, user)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  // updateStocks(stocks){
  //   console.log(stocks);
  //   return this.httpClient.put(stockUrll, stocks)
  //   .toPromise()
  //   .then(data => {
  //     return data;
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }

  
  updateStockStatus(user){
    console.log(user);
    return this.httpClient.put(stockStatus, user)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }

  emailExist(user){
    return this.httpClient.post(emailUrl, user)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }

  addStock(stock){
    return this.httpClient.post(stockUrll, stock)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }

  getAllStocks () {
    return this.httpClient.get(stockUrll)
    .toPromise()
    .then((data: any) => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  getWalletDetails() {
    return this.httpClient.get(walletUrl)
    .toPromise()
    .then((data: any) => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  getOrderByName(order){
    console.log(order)
  	return this.httpClient.post(SeparateOrder, order)
  	.toPromise()
	.then(data => {
		return data;
	})
	.catch(error => {
		console.log(error);
	})
  }
  
  getStockByID(stockID){
    console.log(stockID)
  	return this.httpClient.get(stockUrll + `/${stockID}`)
  	.toPromise()
	.then(data => {
		return data;
	})
	.catch(error => {
		console.log(error);
	})
  }
  
  updateStockByID(stock){
    console.log(stock);
   return this.httpClient.put(stockUrll + `/${stock.ID}`, stock)
   .toPromise()
 .then(data => {
   return data;
 })
 .catch(error => {
   console.log(error);
 })
 }
 
  newPassword(user){
    console.log(user);
    return this.httpClient.put(passwordUrl, user)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  updateUserStatus(user){
    console.log(user);
    return this.httpClient.post(UserStatusUpdateUrl, user)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  updateUserStatusByEmail(user){
    console.log(user);
    return this.httpClient.put(UserStatusUpdateUrl, user)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }
 
  login(user){
    return this.httpClient.post(loginUrl, user)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  registerUser(user){
    return this.httpClient.post(apiUrl, user)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  }

  getUserDetails () {
    return this.httpClient.get(apiUrl)
    .toPromise()
    .then((data: any) => {
      return data.results;
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  getUserByID(user){
    console.log(user)
  	return this.httpClient.get(apiUrl + `${user}`)
  	.toPromise()
	.then(data => {
		return data;
	})
	.catch(error => {
		console.log(error);
	})
  }

  getCouponCode(user){
    return this.httpClient.put(couponUrl, user)
    .toPromise()
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log(err)
    })
  }

  updateUserByID(user){
    console.log(user);
   return this.httpClient.put(apiUrl + `${user.id}`, user)
   .toPromise()
 .then(data => {
   return data;
 })
 .catch(error => {
   console.log(error);
 })
 }

 deleteUser(user){
  console.log(user);
 return this.httpClient.delete(apiUrl + `${user.id}`)
 .toPromise()
.then(data => {
 return data;
})
.catch(error => {
 console.log(error);
})
}

deleteStock(stock){
  console.log(stock);
 return this.httpClient.delete(stockUrll + `/${stock.id}`)
 .toPromise()
.then(data => {
 return data;
})
.catch(error => {
 console.log(error);
})
}
}
