---
author: ProfTomYeh on Twitter
title: Tweets From Tom Yeh | AI by Hand ✍️
category: #tweets
url: https://twitter.com/ProfTomYeh
---
![rw-book-cover](https://pbs.twimg.com/profile_images/1787660049868800000/PfMkSQNQ.jpg)

## Metadata
- Author: @ProfTomYeh on Twitter
- Full Title: Tweets From Tom Yeh | AI by Hand ✍️
- Category: #tweets
- URL: https://twitter.com/ProfTomYeh

## Highlights
- **Vector Database** by Hand ✍️
  Vector databases are revolutionizing how we search and analyze complex data. They have become the backbone of Retrieval Augmented Generation (#RAG).
  How do vector databases work?
  [1] Given
  ↳ A dataset of three sentences, each has 3 words (or tokens)
  ↳ In practice, a dataset may contain millions or billions of sentences. The max number of tokens may be tens of thousands (e.g., 32,768 mistral-7b).
  Process "how are you"
  [2] 🟨 Word Embeddings
  ↳ For each word, look up corresponding word embedding vector from a table of 22 vectors, where 22 is the vocabulary size.
  ↳ In practice, the vocabulary size can be tens of thousands. The word embedding dimensions are in the thousands (e.g., 1024, 4096)
  [3] 🟩 Encoding
  ↳ Feed the sequence of word embeddings to an encoder to obtain a sequence of feature vectors, one per word.
  ↳ Here, the encoder is a simple one layer perceptron (linear layer + ReLU)
  ↳ In practice, the encoder is a transformer or one of its many variants.
  [4] 🟩 Mean Pooling
  ↳ Merge the sequence of feature vectors into a single vector using "mean pooling" which is to average across the columns.
  ↳ The result is a single vector. We often call it "text embeddings" or "sentence embeddings."
  ↳ Other pooling techniques are possible, such as CLS. But mean pooling is the most common.
  [5] 🟦 Indexing
  ↳ Reduce the dimensions of the text embedding vector by a projection matrix. The reduction rate is 50% (4->2).
  ↳ In practice, the values in this projection matrix is much more random.
  ↳ The purpose is similar to that of hashing, which is to obtain a short representation to allow faster comparison and retrieval.
  ↳ The resulting dimension-reduced index vector is saved in the vector storage.
  [6] Process "who are you"
  ↳ Repeat [2]-[5]
  [7] Process "who am I"
  ↳ Repeat [2]-[5]
  Now we have indexed our dataset in the vector database.
  [8] 🟥 Query: "am I you"
  ↳ Repeat [2]-[5]
  ↳ The result is a 2-d query vector.
  [9] 🟥 Dot Products
  ↳ Take dot product between the query vector and database vectors. They are all 2-d.
  ↳ The purpose is to use dot product to estimate similarity. 
  ↳  By transposing the query vector, this step becomes a matrix multiplication.
  [10] 🟥 Nearest Neighbor
  ↳ Find the largest dot product by linear scan.
  ↳ The sentence with the highest dot product is "who am I"
  ↳ In practice, because scanning billions of vectors is slow, we use an Approximate Nearest Neighbor (ANN) algorithm like the Hierarchical Navigable Small Worlds (HNSW).<video controls><source src="https://video.twimg.com/ext_tw_video/1795076436019023872/pu/pl/xZ2MLeT0aJmYaSRd.m3u8?tag=12" type="application/x-mpegURL"><source src="https://video.twimg.com/ext_tw_video/1795076436019023872/pu/vid/avc1/320x320/r8MumWH3LUpzdTl8.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1795076436019023872/pu/vid/avc1/540x540/cpTH59OYwGVy-yIS.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1795076436019023872/pu/vid/avc1/720x720/gE9YVKVaHJDlMB5r.mp4?tag=12" type="video/mp4">Your browser does not support the video tag.</video> ([View Tweet](https://twitter.com/ProfTomYeh/status/1795076707386360227))
- **SORA** by Hand ✍️
  OpenAI’s #SORA took over the Internet when it was announced earlier this year. The technology behind Sora is the Diffusion Transformer (DiT) developed by William Peebles and Shining Xie.
  How does DiT work?
  𝗚𝗼𝗮𝗹: Generate a video conditioned by a text prompt and a series of diffusion steps
  [1] Given
  ↳ Video
  ↳ Prompt: "sora is sky"
  ↳ Diffusion step: t = 3
  [2] Video → Patches
  ↳ Divide all pixels in all frames into 4 spacetime patches
  [3] Visual Encoder: Pixels 🟨  → Latent 🟩
  ↳ Multiply the patches with weights and biases, followed by ReLU
  ↳ The result is a latent feature vector per patch
  ↳ The purpose is dimension reduction from 4 (2x2x1) to 2 (2x1).
  ↳ In the paper, the reduction is 196,608 (256x256x3)→ 4096 (32x32x4)
  [4] ⬛ Add Noise
  ↳ Sample a noise according to the diffusion time step t. Typically, the larger the t, the smaller the noise.
  ↳ Add the Sampled Noise to latent features to obtain Noised Latent.
  ↳ The goal is to purposely add noise to a video and ask the model to guess what that noise is.
  ↳ This is analogous to training a language model by purposely deleting a word in a sentence and ask the model to guess what the deleted word was.
  [5-7] 🟪 Conditioning by Adaptive Layer Norm
  [5] Encode Conditions
  ↳ Encode "sora is sky" into a text embedding vector [0,1,-1].
  ↳ Encode t = 3 to as a binary vector [1,1].
  ↳ Concatenate the two vectors in to a 5D column vector.
  [6] Estimate Scale/Shift
  ↳ Multiply the combined vector with weights and biases
  ↳ The goal is to estimate the scale [2,-1] and shift [-1,5].
  ↳ Copy the result to (X) and (+)
  [7] Apply Scale/Sift
  ↳ Scale the noised latent by [2,-1]
  ↳ Shifted the scaled noised latent by [-1, 5]
  ↳ The result is "conditioned" noise latent.
  [8-10] Transformer
  [8] Self-Attention
  ↳ Feed the conditioned noised latent to Query-Key function to obtain a self-attention matrix
  ↳ Value is omitted for simplicity
  [9] Attention Pooling
  ↳ Multiply the conditioned noised latent with the self-attention matrix
  ↳ The result are attention weighted features
  [10] Pointwise Feed Forward Network
  ↳ Multiply the attention weighted features with weights and biases
  ↳ The result is the Predicted Noise
  🏋️‍♂️ 𝗧𝗿𝗮𝗶𝗻
  [11]
  ↳ Calculate MSE loss gradients by taking the different between the Predicted Noise and the Sampled Noise (ground truth).
  ↳ Use the loss gradients to kick off backpropagation to update all learnable parameters (red borders)
  ↳ Note the visual encoder and decoder's parameters are frozen (blue borders)
  🎨 𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲 (𝗦𝗮𝗺𝗽𝗹𝗲)
  [12] Denoise
  ↳ Subtract the predicted noise from the noised latent to obtain the noise-free latent
  [13] Visual Decoder: Latent 🟩 → Pixels 🟨
  ↳ Multiply the patches with weights and biases, followed by ReLU
  [14] Patches → Video
  ↳ Rearrange patches into a sequence of video frames.<video controls><source src="https://video.twimg.com/ext_tw_video/1795449360802525185/pu/pl/pb6DKSmpQHyfePjm.m3u8?tag=12" type="application/x-mpegURL"><source src="https://video.twimg.com/ext_tw_video/1795449360802525185/pu/vid/avc1/320x320/mVASl42Vlo483yaJ.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1795449360802525185/pu/vid/avc1/540x540/QqCeoG7iZ9PAdl34.mp4?tag=12" type="video/mp4"><source src="https://video.twimg.com/ext_tw_video/1795449360802525185/pu/vid/avc1/720x720/a2i3paAx1uqic8nt.mp4?tag=12" type="video/mp4">Your browser does not support the video tag.</video> ([View Tweet](https://twitter.com/ProfTomYeh/status/1795449683285848509))
