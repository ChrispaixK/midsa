def miniMaxSum(arr)
    # Write your code here
    min = 0
    max = 0
    arr.sort!
    for i in 0..arr.length-2
      min += arr[i]
    end
    for i in 1..arr.length-1
      max += arr[i]
    end
    puts "#{min} #{max}"
  end

test = [9, 2, 5, 1, 7];
miniMaxSum(test)