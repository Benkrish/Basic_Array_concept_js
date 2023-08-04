// Write a function to find the maximum number in an array.
// Write a function to find the minimum number in an array.
// Write a function to calculate the sum of all numbers in an array.
// Write a function to reverse an array in place (without using the reverse() method).
// Write a function to remove all duplicates from an array.
// Write a function to check if an array is sorted in ascending order.
// Write a function to find the average of all numbers in an array.
// Write a function to return the index of the first occurrence of a given element in an array.
// Write a function to remove a specific element from an array.
// Write a function to merge two sorted arrays into a new sorted array

// 1
function maxArray(a1) {
  let max = 0
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] > max) {
      max = a1[i]
    }
  }
  return max
}

console.log(maxArray([5, 6, 7, 10, 1]))

// 2
function minArray(a1) {
  let min = Number.MIN_VALUE
  for (let i = 0; i < a1.length; i++) {
    if (min <= a1[i]) {
      min = a1[i]
    }
    return min
  }
}

console.log(minArray([5, 6, 7, 8, 9, 10]))

// 3
function sumArray(a1) {
  let sum = 0
  for (let i = 0; i < a1.length; i++) {
    sum += a1[i]
  }
  return sum
}

console.log(sumArray([5, 6, 7, 8, 9, 10]))

// 4

function revArray(a1, start, end) {
  const arrRev = []
  let temp
  while (start < end) {
    temp = a1[start]
    a1[start] = a1[end]
    a1[end] = temp
    start++
    end--
  }
  return a1
}
function printArray(a1, n) {
  let arr = []
  for (let i = 0; i < a1.length; i++) {
    console.log(a1[i])
  }
}
let ar = [5, 6, 7, 8]
let n = 4
revArray(ar, 0, n - 1)
printArray(ar)

// 5
function remDup(arr) {
  let unique = [...new Set(arr)]
  return unique
}
arr = [1, 2, 3, 4, 4, 2, 5]
console.log(remDup(arr))

function remDup_(arr) {
  let unique = new Set()
  for (let ele of arr) {
    if (!unique.has(ele)) {
      unique.add(ele)
    }
  }
  let mod_arr = [...unique]
  return mod_arr
}
arr = [1, 2, 3, 4, 4, 2, 5]
console.log(remDup_(arr))

// 6
function sortArrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
      break
    }
  }
  return true
}

arr = [2, 5, 1, 6]
ans = sortArrays(arr)
if (ans) {
  console.log('sorted')
} else {
  console.log('not sorted')
}

// 7
function avgArray(arr) {
  let sum = 0
  for (let ele of arr) {
    sum += ele
  }
  return sum / arr.length
}
arr = [10, 10, 10, 10]
console.log(avgArray(arr))

// 8
function firstOccurence(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i
    }
  }
  return -1
}
arr = [1, 5, 8, 9, 10, 7, 65]
const index = firstOccurence(arr, 99)

if (index == -1) {
  console.log('Not found')
} else {
  console.log('Found at index' + index)
}

// 9
function removeSpecific(arr, target) {
  while (arr.includes(target)) {
    const index = arr.indexOf(target)
    arr.splice(index, 1) // Modifies original array
  }
  return arr
}
arr = [1, 5, 8, 9, 10, 7, 65, 9]
console.log(removeSpecific(arr, 9))

// 10
function newmergeSortedArrays(arr1, arr2) {
  let mergedA = []
  let i = 0
  let j = 0

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedA.push(arr1[i])
      i++
    } else {
      mergedA.push(arr2[j])
      j++
    }
  }

  return mergedA
}

const arr1 = [1, 3, 5, 7, 9]
const arr2 = [2, 4, 6, 8, 10]
const merged = newmergeSortedArrays(arr1, arr2)

console.log(merged)
