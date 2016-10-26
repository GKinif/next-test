export default class UserServices {
    /**
     * Get a list of user from the site randomuser.me
     * 
     * @param {Number} amount
     * @returns {PromiseLike}
     * 
     * @memberOf UserServices
     */
    getUsers(amount) {
        return new Promise(function (resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `https://randomuser.me/api/?results=${amount}`);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                    status: this.status,
                    statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };
            xhr.send();
        });
    }
}