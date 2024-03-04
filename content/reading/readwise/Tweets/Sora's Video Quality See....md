---
author: [[@thatguybg on Twitter]]
title: Sora's Video Quality See...
category: #tweets
url: https://twitter.com/thatguybg/status/1759935959792312461
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1610717241305337857/CYub7vgW.jpg)

## Metadata
- Author: [[@thatguybg on Twitter]]
- Full Title: Sora's Video Quality See...
- Category: #tweets
- URL: https://twitter.com/thatguybg/status/1759935959792312461

## Highlights
- Sora's video quality seems impossible so I dug into how it works under the hood
  it uses both diffusion (starting with noise, refining towards a desired video) and transformer architectures (handling sequential video frames)
  read on 🧵 <video controls><source src="https://video.twimg.com/tweet_video/GGyMa97aQAAHRtr.mp4" type="video/mp4">Your browser does not support the video tag.</video> ([View Tweet](https://twitter.com/thatguybg/status/1759935959792312461))
- here's an example:
  prompt: "a stop-motion animation of a flower growing out of the windowsill of a suburban house."
  Sora doesn't directly translate text to video frames. instead, it works on spacetime patches. <video controls><source src="https://video.twimg.com/ext_tw_video/1759935966968774656/pu/vid/avc1/480x270/mTrDxxoD3a9zbyUR.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1759935966968774656/pu/vid/avc1/640x360/p-aLXKKdycBw4qiE.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1759935966968774656/pu/vid/avc1/1280x720/2rSuuG871P7nuURO.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1759935966968774656/pu/pl/ywJ09qisoffrY01o.m3u8?tag=12&container=cmaf" type="application/x-mpegURL">Your browser does not support the video tag.</video> ([View Tweet](https://twitter.com/thatguybg/status/1759936019305320926))
- these patches capture a snapshot of both space (what's happening) and time (when it happens), like mini video puzzles on an atomic level. 
  ![](https://pbs.twimg.com/media/GGyMfbEboAAZcev.png) ([View Tweet](https://twitter.com/thatguybg/status/1759936028947914904))
- so imagine the video as a giant cuboid (space and time), and Sora cuts it into smaller cuboids, each representing a snippet of space and time. 
  ![](https://pbs.twimg.com/media/GGyMf6rbUAAoqhg.png) ([View Tweet](https://twitter.com/thatguybg/status/1759936037823172719))
- for our example:
  first, it dissects the description and identifies the core elements:
  • objects (the blooming flower, the sunlit windowsill)
  • actions (growth unfolding over time)
  • location (the suburban setting)
  • and even artistic stylings (the stop-motion aesthetic) ([View Tweet](https://twitter.com/thatguybg/status/1759936043191775739))
- next are the spacetime patches.
  the flower yearning to unfurl becomes a patch, the sun-kissed windowsill another, and the slow growth across time another
  all these things act as a sequence of patches evolving throughout the video scene. ([View Tweet](https://twitter.com/thatguybg/status/1759936046639480903))
- these patches, however, aren't just random fragments.
  to assemble them coherently, Sora has its internal knowledge graphs.
  these databases contain information about the physical world, how objects interact, and even artistic styles. ([View Tweet](https://twitter.com/thatguybg/status/1759936050137567465))
- this allows Sora to understand
  • how the flower realistically grows (petal by petal)
  • how it interacts with sunlight (lighting changes over time),
  • and adheres to the stop-motion aesthetic (frame-by-frame transitions).
  these individual patches create a noisy canvas 
  ![](https://pbs.twimg.com/media/GGyMhG2a8AAMHPq.png) ([View Tweet](https://twitter.com/thatguybg/status/1759936057779572922))
- after this, the diffusion models take each noisy, abstract patch and gradually refine it towards its final appearance.
  each petal of the flower takes shape, the sunlight becomes more defined, and the stop-motion style emerges frame by frame
  like this <video controls><source src="https://video.twimg.com/ext_tw_video/1759936063152537600/pu/pl/7N_b_WV_VqfE8W0F.m3u8?tag=12&container=cmaf" type="application/x-mpegURL"><source src="https://video.twimg.com/ext_tw_video/1759936063152537600/pu/vid/avc1/480x270/X2wceqdteuoKEpbv.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1759936063152537600/pu/vid/avc1/640x360/qCe6HZpZNVwV2P1b.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1759936063152537600/pu/vid/avc1/1280x720/WMjAIkY1wvEczPrZ.mp4?tag=12" type="video/mp4">Your browser does not support the video tag.</video> ([View Tweet](https://twitter.com/thatguybg/status/1759936087911465005))
- while diffusion models handle individual patches, the transformers analyze the relationships between patches across time.
  so the flower grows smoothly, the sunlight shifts naturally, and the stop-motion aesthetic remains consistent throughout the video sequence.
  pixel by pixel 
  ![](https://pbs.twimg.com/media/GGyMjZha4AABjT0.png) ([View Tweet](https://twitter.com/thatguybg/status/1759936097227080192))
- it can do all sorts of video related tasks: 
  ![](https://pbs.twimg.com/media/GGyMj5qawAAseLZ.png) ([View Tweet](https://twitter.com/thatguybg/status/1759936106479698383))
- but still, there's a long way to go
  it does not accurately replicate the physics of many basic interactions
  see the weird hand gestures of the woman waving here someone described as "hyperdimensional aliens trying to figure out how to appear human in 3D space" <video controls><source src="https://video.twimg.com/ext_tw_video/1759936112628523008/pu/vid/avc1/480x270/V9t9RlAEnRTroCOU.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1759936112628523008/pu/pl/YzO5Ubpiv5ME22-0.m3u8?tag=12&container=cmaf" type="application/x-mpegURL"><source src="https://video.twimg.com/ext_tw_video/1759936112628523008/pu/vid/avc1/640x360/M8CLjQyH_6tCftZy.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1759936112628523008/pu/vid/avc1/1280x720/Q6oiJ9-Y0W5zQkob.mp4?tag=12" type="video/mp4">Your browser does not support the video tag.</video> ([View Tweet](https://twitter.com/thatguybg/status/1759936150146580945))
- this is my first time digging into how some AI tech works but seems like I should do it again!
  give me a follow <a href="https://twitter.com/thatguybg">@thatguybg</a> & lmk what I should cover next ([View Tweet](https://twitter.com/thatguybg/status/1760069412466348320))
