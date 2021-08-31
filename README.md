# Berry-Machine
Link to website: https://stephanie0829.github.io/Berry-Machine/home.html \
Simple gacha game where user can randomly "spin" to recieve a berry from the machine.\
Berries are classified into 5 categories: normal (N), rare (R), super rare (SR), super super rare (SSR), ultra rare (UR)
## Interface
<img width="800" alt="Screen Shot 2021-08-31 at 2 32 13 PM" src="https://user-images.githubusercontent.com/72533858/131557122-441aa9f4-121e-4479-b310-a6144182a735.png">

* Berries, title, background, and icons created using https://www.pixilart.com/
* Used javascript to build the displaying of images and text upon user interaction
  * Used an object to hold image url and description of a berry
  * A map mapped an identification number(key) to object(value) for each berry
    * A map was chosen for benefit of quick access time (like a hash map)
## Implementation of randomization
* Utilized the math library
* Used an exponential function as the hashfunction for choosing the correct N, R, SR, SSR, UR bucket
  * A random x mapped to these categories indexed 0-4
  * function:  f(x) = -1.02^x + 51   (found through testing with a graphing calculator)
  * Chosen so that a random number x in 1-198 (inclusive) would be mapped to a f(x) in the range 0 to 50
  * f(x) is then divided by 10 to limit the range to 0-4 (decimals starting with these integer values) and rounded down (using the truncation function) s.t the range is 0-4 inclusive
* Within each bucket a specific berry is chosen
  * A random number is generated using the math library, corresponding to the indentification number of the berry within the map (the key)
## Future thoughts
* There is a large amount of loading time to initialize the map and on each load of the "rates" button/tab as each url is displayed with description and other data (repeated 30 times, each time for one item)
  * A better method would reduce such time so that the code is more optimized
* More berries can be added, and rates can be adjusted with more interaction
* Can implement change to the system such that with each "spin" one item is taken out from a total "pool" of items, with periodic refreshes with items
