
import axios from 'axios'
export const actions = {
  // tableData
  getTableData () {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: '../../static/tableTest.json'
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error, '错误')
      })
    })
  }
}
