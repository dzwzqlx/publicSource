const { exec } = require('child_process')

var lx288 = {}
lx288.a = (test) => {
  console.log(test)
}
lx288.b = () => {
  console.log(2)
}

// ✳️✳️✳️✳️✳️ 执行系统指令，可以用字符串，也可以用数组，也可以用多行字符串
// 需要：const { exec } = require('child_process')
lx288.nodeExec = (exec, a)=> { // 测试方式：nodeExec(['dir', 'echo fdfdfadsfd'])
  // strExec('chcp 65001')
  if ('string' == typeof (a)) {
    if (!a.includes('\n')) {
      strExec(a)
      return
    } else {
      a = a.split('\n')
    }
  }
  for (let i in a) strExec(a[i])
  function strExec(str) {
    exec(str, (err, stdout, stderr) => {
      if (err) {
        console.log(err)
        return
      }
      if (stdout) console.log(`stdout: ${stdout}`)
      if (stderr) console.log(`stderr: ${stderr}`)
    })
  }
}

module.exports = lx288
