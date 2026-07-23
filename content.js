/* ============================================================
   IELTS Writing Task 2 — Essay Writing Guide
   Transcribed content, ordered by printed book page number.
   Source: 4 scanned PDFs (Adobe Scan). Page numbers noted per section.
   Block types consumed by app.js:
     {t:'p',   html}            paragraph
     {t:'h',   text}            sub-heading inside a section
     {t:'model', html}          author's model sentence / example (italic)
     {t:'note', html}           author's bracketed aside
     {t:'callout', title, html} highlighted tip box
     {t:'list', items:[html]}   bullet list
     {t:'steps', items:[html]}  numbered list
     {t:'table', head:[], rows:[[...]]}
     {t:'essay', prompt, words, paras:[html]}  full model essay
   ============================================================ */

const GUIDE = {
  title: "IELTS Writing Task 2",
  subtitle: "A Practical Guide to Essay Writing",
  parts: [
    /* =====================================================
       PART I — FOUNDATIONS
       ===================================================== */
    {
      id: "foundations",
      label: "Part I",
      title: "Foundations",
      sections: [
        {
          id: "s-1-4", num: "1.4", page: 10, title: "Task sequence for IELTS essay writing",
          blocks: [
            { t: "p", html: "In order to complete your essay effectively and efficiently within the set time and conditions of an IELTS exam you need to have a very clear and systematic approach to writing your essays. From my experience as an examiner and teacher I recommend the following approach. You may wish to modify this a little for your own personal style." },
            { t: "steps", items: [
              "<strong>Read the Task.</strong> This is a critical step that is often underestimated. Missing a single word in the instructions might result in an essay that doesn't focus on the topic. For instance if the topic is about <em>young people</em> and you only write about people in general then you will have a weak score for task response. I also suggest you underline key words. This will help you to focus on them and will also assist with the next step.",
              "<strong>Rephrase keywords in the task instructions.</strong> You need to rephrase the keywords that are given in the topic for two reasons. The main reason is that if you do not, the examiner will put brackets around the words you have copied from the task and these words will not be included in your word count. This may lead to your essay being under length. As well as this, you should rephrase the keywords to show your talent with vocabulary.",
              "<strong>Establish the topic and the question type</strong> (there are three different types of questions). You must focus on the topic and question to score well for task response.",
              "<strong>Plan the structure of the answer.</strong> A good plan helps you to reduce the amount of time you need to write your essay and also leads to a suitable structure. If you structure your essay well you will score well for cohesion and coherence. As well as this it will be easier for the examiner to see the quality of your task response.",
              "<strong>Write your answer.</strong> If you have made a solid plan then the writing stage will go more quickly and smoothly. Make sure you stick to your plan while writing. Also, do not think of additional points for your essay while writing. Instead, utilise all of your brainpower on writing correct sentences using correct language, so that you will have an essay that will score well for vocabulary and grammar.",
              "<strong>Proofread your answer if time permits.</strong> If you have any time at all left at the end of your exam, you should use it to proofread your essay, so that you will have fewer errors with vocabulary and grammar. Focus on looking for the common mistakes you make with your writing. Common ones are errors with subject-verb agreement, articles [a, an, the], and the “s” endings of words."
            ]},
            { t: "callout", title: "Tip!", html: "Making a plan saves you time when you write your report and ensures you cover all the key points using an appropriate structure." }
          ]
        },
        {
          id: "s-2", num: "2", page: 12, title: "Grading of tasks",
          blocks: [
            { t: "p", html: "The examiner grades your essay against four criteria. Each is weighted equally." },
            { t: "table",
              head: ["Criteria", "Requirement"],
              rows: [
                ["<strong>Task Response</strong><br>How well you have focused on the topic and answered the question.",
                 "Write over 250 words · satisfy all the requirements of the task · cover all parts of the topic · cover all parts of the question · develop main points"],
                ["<strong>Coherence and Cohesion</strong><br>How well you have structured your essay, used paragraphing, and connected your ideas.",
                 "Sequence information and ideas logically · use a range of cohesive devices appropriately · use paragraphing appropriately · have a clear progression throughout · avoid unnecessary repetition of information"],
                ["<strong>Lexical Resource</strong><br>Your vocabulary in terms of errors and ability to use more advanced language.",
                 "Use vocabulary to allow some flexibility and precision · use less common vocabulary · awareness of style and collocation · avoid errors with word choices · avoid errors with word formation · avoid errors with spelling"],
                ["<strong>Grammatical Range and Accuracy</strong><br>Your grammar in terms of errors and ability to use more advanced sentence structures.",
                 "Use a mix of simple and complex sentence forms · produce error-free sentences · avoid errors with grammar and punctuation"]
              ]
            }
          ]
        },
        {
          id: "s-3", num: "3", page: 13, title: "Comparing the three types of essays",
          blocks: [
            { t: "h", text: "Key question words" },
            { t: "table",
              head: ["Opinion", "Both sides + opinion", "Two question essay"],
              rows: [
                ["What is your opinion?<br>Do you agree or disagree?<br>To what extent do you agree or disagree?<br>Do you think the advantages outweigh the disadvantages?",
                 "Discuss the advantages and disadvantages<br>Discuss the advantages and disadvantages and give your own opinion<br>Discuss both sides of this argument and then give your own opinion.",
                 "What problem does this cause? What are some potential solutions?<br>Do you agree? What are some other solutions?<br>What are the causes of this problem? What are some potential solutions?"]
              ]
            },
            { t: "h", text: "Example question" },
            { t: "table",
              head: ["Opinion", "Both sides + opinion", "Two question essay"],
              rows: [
                ["Computers are being used more and more in education and some say there will soon be no role for the teacher in education.<br><br>To what extent do you agree or disagree?",
                 "Computers are being used more and more in education. Some people say that this is a positive trend, while others argue that it is leading to negative consequences.<br><br>Discuss both sides of this argument and then give your own opinion.",
                 "Alcohol abuse is becoming more and more common in many countries.<br><br>What are some of the problems it causes? What are some of the possible solutions?"]
              ]
            }
          ]
        },
        {
          id: "s-3-1", num: "3.1", page: 14, title: "Structuring the three types of essays",
          blocks: [
            { t: "h", text: "Introduction" },
            { t: "table",
              head: ["Opinion", "Both sides + opinion", "Two question essay"],
              rows: [
                ["Rephrase question<br>Position = state whether you agree or disagree and the extent (how much)",
                 "Rephrase question<br>“This essay discusses…” + [both sides] and [opinion]",
                 "Rephrase question<br>“This essay discusses…” + [question 1] and [question 2]"]
              ]
            },
            { t: "h", text: "Body" },
            { t: "table",
              head: ["Opinion", "Both sides + opinion", "Two question essay"],
              rows: [
                ["reason 1<br>reason 2<br>reason 3 / concession (argument against your main opinion)",
                 "Side 1 advantages<br>Side 2 advantages<br>[Note: keep your opinion out of the body. It is only about what people in general may think.]",
                 "question 1<br>question 2"]
              ]
            },
            { t: "h", text: "Final paragraph" },
            { t: "table",
              head: ["Opinion", "Both sides + opinion", "Two question essay"],
              rows: [
                ["Restating of your position + summary of reasons",
                 "Your opinion.<br>State that both sides are important / have merits.<br>State which one is more important / better.",
                 "Summary of question 1 and 2"]
              ]
            }
          ]
        },
        {
          id: "s-essay-structure", num: "◈", page: 15, title: "Essay Structure (diagram)",
          blocks: [
            { t: "p", html: "The essay flows in one direction: the <strong>introduction</strong> sets up the main points, the <strong>body</strong> develops them, and the <strong>conclusion</strong> summarises them." },
            { t: "diagram", kind: "essay-flow" },
            { t: "h", text: "Point 1" },
            { t: "p", html: "The last part of the introduction functions to influence the main points of each body paragraph. These main points are usually given in the topic sentence." },
            { t: "h", text: "Point 2" },
            { t: "p", html: "The main points from the body get summarised in the conclusion of the essay." }
          ]
        },
        {
          id: "s-4", num: "4", page: 16, title: "Parts of the essay",
          blocks: [
            { t: "p", html: "Further discussion is provided below on the structure of the essay, using the task below as an example:" },
            { t: "callout", title: "Worked task", html: "<strong>TOPIC:</strong> Computers are being used more and more in education and some say there will soon be no role for the teacher in education.<br><br><strong>QUESTION:</strong> To what extent do you agree or disagree?" }
          ]
        },
        {
          id: "s-4-1", num: "4.1", page: 16, title: "Introduction",
          blocks: [
            { t: "p", html: "You only need two sentences for your introduction. You may have learnt from other teachers that you should include aspects such as a <em>background to the situation</em>, but you need to bear in mind that this is a very short essay of only a little over 250 words and so you want to keep your introduction brief. I suggest you just write a general statement and specific statement as explained below." },
            { t: "h", text: "General statement" },
            { t: "p", html: "The general statement is the topic that you need to write about. You can write this very easily by just rephrasing the topic you are given. This is the best way to do this. Do not try to be creative here, as you will not be rewarded for this and you risk lowering your score for task response if you misstate the topic." },
            { t: "model", html: "<strong>GOOD REPHRASE:</strong> Some people believe technology may be used to replace teachers in the future." },
            { t: "model", html: "<strong>BAD REPHRASE:</strong> Due to the rising prevalence of advanced technology computers are becoming more useful. <em>(This misstates the topic because it is not about whether computers are useful — it is about whether they will replace teachers.)</em>" },
            { t: "model", html: "<strong>TOO LONG:</strong> Ever since the dawn of time, mankind has been finding ways to improve their lives… <em>(Too long! It is like a history lesson. Big long introductions do more harm than good — spend more time on the body of the essay to show your ability to develop your main ideas.)</em>" },
            { t: "h", text: "Specific statement" },
            { t: "p", html: "The specific statement comes from the question part of the task. What you write will depend upon which of the three types of questions are asked. If the essay asks for your opinion you should give this here. If the question asks for anything else you should start this statement with “this essay discussing” and then rephrasing what you are asked for." },
            { t: "h", text: "Specific statement for an opinion essay" },
            { t: "p", html: "<strong>QUESTION:</strong> To what extent do you agree or disagree? This type of question needs to be responded to very precisely in the introduction. To fully respond to all words in the question you need to mention the EXTENT — how much you agree or disagree. Some choices are:" },
            { t: "list", items: [
              "Totally agree", "Somewhat agree",
              "Equally agree and disagree <em>[a risky choice that I think should be avoided]</em>",
              "Somewhat disagree", "Totally disagree"
            ]},
            { t: "p", html: "So the sentence will look something like:" },
            { t: "model", html: "I totally agree with this opinion <em>[good and safe choice]</em>" },
            { t: "model", html: "I totally agree that teachers should be replaced with computers <em>[better as there is a fuller sentence]</em>" },
            { t: "model", html: "I totally agree that teachers should be replaced with computers because they are cheaper and more convenient for students <em>[best because it gives the examiner a clear idea of what the essay is about. Paragraph 2 should be about cheaper, and paragraph 3 should be about being more convenient].</em>" },
            { t: "h", text: "Specific statement for a non-opinion essay" },
            { t: "p", html: "= “this essay discusses” + rephrase of the question." },
            { t: "model", html: "<strong>Q:</strong> Discuss the advantages and disadvantages of using computers in the classroom.<br><strong>→</strong> This essay discusses the merits and drawbacks of the use of computers in schools." },
            { t: "model", html: "<strong>Q:</strong> What are some disadvantages of using computers in the classroom? What are some ways to overcome these disadvantages?<br><strong>→</strong> This essay discusses drawbacks with the use of computers in schools and also some ways to solve them." }
          ]
        },
        {
          id: "s-4-2", num: "4.2", page: 19, title: "Body",
          blocks: [
            { t: "p", html: "The body of the essay should logically fit with the introduction you gave. The specific statement [last sentence of the introduction] should serve as a guide for the body. For instance, if you said you totally agree in the introduction then the body should consist of two or three paragraphs about why you agree. If you said you somewhat agree then the body should be mostly about why you agree, but also have a concession, which means that you are pointing out some arguments from the opposing side of your main opinion. The body of an IELTS essay should usually consist of two or three paragraphs. You need to have logical paragraphing to score well for cohesion and coherence." },
            { t: "h", text: "Structure of the body of an essay" },
            { t: "table",
              head: ["Opinion essay", "Both sides and opinion", "Two question essay"],
              rows: [
                ["Reason 1 for opinion<br>Reason 2 for opinion<br>Reason 3 for opinion [optional]",
                 "Side A<br>Side B<br>[Opinion is given in the concluding paragraph]",
                 "Question 1<br>Question 2"]
              ]
            },
            { t: "p", html: "The structure of each paragraph needs to be logical and there should be ONE clear focus for each paragraph. The best way to achieve a focus and to communicate this to the examiner is by making this clear in the first sentence of each paragraph. This first sentence is called the <strong>topic sentence</strong>." },
            { t: "p", html: "<strong>Topic sentence = topic + key point about the topic</strong>" },
            { t: "model", html: "There are several <u>merits</u> of the use of computers in schools. &nbsp;(topic = use of computers in schools; key point = merits)" },
            { t: "model", html: "However, there are some important <u>drawbacks</u> with using computers in education. &nbsp;(topic = using computers in education; key point = drawbacks)" },
            { t: "p", html: "The first sentence of each paragraph, often referred to as a topic sentence, introduces the paragraph by stating and summarising the main point being made. Topic sentences often contain transition signals, which aid in the smooth transition from one paragraph to the next. If the reader were to scan your topic sentences, they should be able to obtain a sketch of the entire essay. The absence of topic sentences leaves the reader wondering what you are trying to say and why, ultimately confusing the reader. <strong>Signposting</strong> within your paragraph also aids the reader. The following example illustrates the effective use of signposts (underlined)." },
            { t: "model", html: "<u>Finally</u>, as with all models of learning, rote memorisation has limitations. <u>For example</u>, the model implies that learning occurs in a serial processing form, whereas we know that learning is a recursive process. <u>Furthermore</u>, the model fails to take into account motivation and social interaction as essential aspects of the learning process. <u>Nevertheless</u>, the model gives educators many useful guidelines for considering how information can be structured to facilitate learning." },
            { t: "h", text: "Effective paragraphs have three important qualities" },
            { t: "list", items: [
              "<strong>UNITY:</strong> A paragraph should focus on one main idea.",
              "<strong>DEVELOPMENT:</strong> this occurs when the idea is elaborated on in the paragraph. This elaboration usually consists of explaining the key point, adding details about it, or giving an example to illustrate it.",
              "<strong>COHERENCE:</strong> This means everything in the paragraph should relate to and expand on the point you are making."
            ]}
          ]
        },
        {
          id: "s-4-3", num: "4.3", page: 21, title: "Conclusion",
          blocks: [
            { t: "p", html: "Given that an IELTS essay is only a little over 250 words and you have limited time to write your essay, it is important that you can write a brief but complete conclusion to your essay." },
            { t: "p", html: "You need to send a SIGNAL to the examiner that you are making the conclusion. I like the phrase <em>in conclusion</em> best. I suggest you just use this as it can be used for ALL THREE types of essays. The more you can avoid the need to remember and correctly apply different phrases for each type of essay the better. Other people may hate this, so I don't recommend it. It is not impressive; I feel it is a cliché, or an overused phrase. I also don't feel it is formal. If you say <em>in summary</em> or <em>to summarise my main points</em> you will have to not use these phrases with certain types of essays. For instance, with a both-sides-and-opinion essay you are not really summarising your main points in the final paragraph, you are giving your own opinion." },
            { t: "p", html: "After the signal we have to apply two different structures depending on the type of essay. We can separate these into two types: an <em>opinion</em> for a both-sides-and-opinion essay and a <em>summary</em> for an opinion essay or two-question essay." }
          ]
        },
        {
          id: "s-conc-types", num: "◈", page: 22, title: "Conclusion for each type of essay",
          blocks: [
            { t: "table",
              head: ["Opinion essay", "Both sides and opinion essay", "Two question essay"],
              rows: [
                ["1. Restate whether you agree or disagree and the extent. If your position is somewhat agree/disagree then make sure you put the side you support most first.<br>2. Summarise the main reasons for your opinion.<br>3. Say something more. Ideally if you still have time try to write one more sentence to give a final opinion or recommendation based on your summary. This is the difference between a good conclusion and an excellent one!",
                 "1. State that both sides of the argument are important / have merits.<br>2. State which one is more important / better.<br>3. Say why. Justify your selection. This is the key to reaching grade 7 and above for task response. Remember that YOUR opinion is one of the three parts of the question and although this paragraph may be briefer than the body paragraphs it is a very important one.",
                 "1. Summarise the main points of question 1.<br>2. Summarise the main points of question 2."]
              ]
            },
            { t: "table",
              head: ["Opinion — example", "Both sides — example", "Two question — example"],
              rows: [
                ["<em>In conclusion, I totally disagree that machines can replace teachers. This is because teachers can encourage students to learn and teach them how to interact with other people.</em>",
                 "<em>In conclusion, I believe both sides of the argument have their merits. On balance, however, I tend to believe that the advantages of studying using a computer outweigh those made possible by a teacher. This is because it is cheaper and more convenient to study online.</em>",
                 "<em>In conclusion, the main problems with using computers in schools are that students get distracted from studying and they use them to access inappropriate content. These can be overcome by educators monitoring their students closely and by restricting the websites they can access.</em>"]
              ]
            }
          ]
        },
        {
          id: "s-4-4", num: "4.4", page: 23, title: "Planning your essays",
          blocks: [
            { t: "p", html: "On a few occasions I have been an invigilator (person to make sure no one is cheating!) in the writing exam. I was amazed to see that about 10% just started writing their essays without writing any plan first. Afterwards, I asked some of my students who were attending why they didn't write a plan. “Oh we thought we didn't have time to do it.”" },
            { t: "p", html: "The plan serves three purposes. First, it helps you think about the main points you will write, so it increases your score for Task Response. Second, it helps you structure your essay better, so it increases your score for Cohesion and Coherence. Finally, it saves you time. That's right! By making a plan first, you won't have to keep stopping to think what you will write next." },
            { t: "p", html: "Each essay question is composed of two parts. The TOPIC, which is what the essay is about; and the TASK, which is what sort of essay you need to write. There are three main types of essays. The first asks your opinion, or do you agree or disagree. The second asks you to explain two sides of an argument and then give your own personal opinion on that topic. The third asks you two questions; for example, “discuss the problems and solutions.”" },
            { t: "p", html: "You should learn how to plan for all three types of essays. You can practice your planning by looking at past exam questions and thinking what would be your main points and how would you structure the essay." },
            { t: "h", text: "Tasks that include examples" },
            { t: "p", html: "If the task mentions “for instance” or “for example”, that means you don't have to specifically mention those items. So you don't have to talk about sport or music — you could talk about art instead." },
            { t: "model", html: "It is generally believed that some people are born with certain talents, <u>for instance for sport or music</u>, and others are not. However, it is sometimes claimed that any child can be taught to become a good sports person or musician. <em>Discuss both these views and give your own opinion.</em>" },
            { t: "h", text: "Tasks that include two parts [usually signalled by “and”]" },
            { t: "p", html: "For the task below, the topic includes two parts and both must be referred to in the body of the essay. These two parts are <u>cheaper</u> and <u>easier</u>. You need to include both to get to 6 for task response and you need to cover both of them well to get 7 and above." },
            { t: "model", html: "These days, due to advances in technology, it is <u>cheaper</u> and <u>easier</u> to travel abroad. <em>Do the advantages outweigh the disadvantages?</em>" }
          ]
        }
      ]
    },

    /* =====================================================
       PART II — OPINION ESSAY
       ===================================================== */
    {
      id: "opinion",
      label: "Part II",
      title: "The Opinion Essay",
      sections: [
        {
          id: "s-5", num: "5", page: 25, title: "Opinion essay",
          blocks: [
            { t: "p", html: "This type of essay tests your ability to state an opinion on an issue and then support it with logical reasons. To score well you need to explain your reasons clearly and use examples to illustrate the key points you are trying to make." }
          ]
        },
        {
          id: "s-5-1", num: "5.1", page: 25, title: "Typical question words",
          blocks: [
            { t: "list", items: [
              "What is your opinion?",
              "Do you agree or disagree?",
              "To what extent do you agree or disagree?",
              "Do the advantages outweigh the disadvantages?",
              "To what extent do the advantages outweigh the disadvantages?"
            ]},
            { t: "callout", title: "Sample task", html: "Some people believe that the fast pace and stress of modern life is having a negative effect on families.<br><br><em>To what extent do you agree or disagree?</em>" }
          ]
        },
        {
          id: "s-5-2", num: "5.2", page: 26, title: "Task analysis",
          blocks: [
            { t: "p", html: "It is important to realise that every task contains a topic and a question. You must fully address both the topic and the question to score six and above for task response. An analysis of the topic and question is provided below:" },
            { t: "p", html: "<strong>Topic:</strong> Some people believe that the <strong>fast pace <u>and</u> stress</strong> of modern life is having a negative effect on families." },
            { t: "p", html: "Whenever you see the word <strong>and</strong> in the topic you must address both parts of this question. In this case the essay must address both the fast pace and stress of modern life in order to reach six and above for task response. Failure to address both parts of the topic results in a task response of five or below. This is because not all parts of the topic have been addressed." },
            { t: "p", html: "<strong>Question:</strong> <em>To what extent do you agree or disagree?</em>" },
            { t: "p", html: "The question also has two requirements. You must state whether you agree or disagree and also the extent, or how much, you agree or disagree. In order to score a six and above you need to clearly state your response to the question including the extent to which you agree or disagree. In order to make your opinion clear I believe it is best to give your opinion in both the introduction and conclusion of the essay. Do not forget to mention the extent! Even if the question does not ask the extent, for instance it just asks do you agree or disagree, I still believe it is a good idea to state the extent. You can give the extent using words like <em>totally</em> or <em>completely</em> if you 100% agree or disagree; or <em>somewhat</em> or <em>partly</em>, if you do not fully agree or disagree. I strongly urge you to not 50-50 agree and disagree. This usually ends up being unconvincing and unclear." }
          ]
        },
        {
          id: "s-5-3", num: "5.3", page: 27, title: "Planning your essay",
          blocks: [
            { t: "steps", items: [
              "<strong>Underline key vocabulary in the topic and write words with the same or related meaning.</strong><br>Some people believe that the <u>fast pace</u> (high-speed) and <u>stress</u> (pressure) of <u>modern life</u> (contemporary lifestyles) is having a <u>negative</u> (harmful) <u>effect</u> (influence) on <u>families</u> (family life).",
              "<strong>Decide what kind of response is needed.</strong><br><em>To what <u>extent</u> do you agree or disagree?</em> = say how much you agree or disagree.",
              "<strong>Brainstorm key points for the answer.</strong>"
            ]},
            { t: "table",
              head: ["Agree — negative effect on families", "Disagree — negative effect on families"],
              rows: [
                ["Fast pace leads to less time for families to be together", "Due to the increased time pressure and stress families are forced to cooperate more, which brings them closer together"],
                ["Stress leads to arguments among family members", ""]
              ]
            },
            { t: "steps", start: 4, items: [
              "<strong>Decide on your position</strong> (totally agree, somewhat agree, somewhat disagree, totally disagree).<br>You do not need to give arguments for both sides of the topic. It is up to you, as it is your opinion. Rather than thinking about your real opinion, I suggest you look at the points you have brainstormed for each side of the argument, and then choose a side that you think will be easiest to explain, and for which you have the better language to use. Remember this is a language test and not a test of your knowledge. The key point is to focus on language and structuring your whole task well.",
              "<strong>Decide on the structure of the essay.</strong><br>Based on your position (extent you agree or disagree) put numbers next to each of the points you have brainstormed above in the order you will cover them. You should always cover the side you support more strongly first in the body of the essay. Also, you should always organise your points from strongest and weakest."
            ]}
          ]
        },
        {
          id: "s-5-4", num: "5.4", page: 29, title: "Steps in writing your essay",
          blocks: [
            { t: "p", html: "Once you have written a solid plan for your essay, you can begin the task of actually writing the essay. Having a good plan will speed up this process and ensure that you are consistent with your opinion throughout the essay. What I mean here is that the opinion you give in the introduction will fit the body of the essay, and the conclusion will restate the same opinion you gave in the introduction and summarise the body of the essay. If you achieve this high level of fit, you are likely to score well for task response and cohesion and coherence." },
            { t: "h", text: "Writing the introduction — 1. Paraphrase the question" },
            { t: "p", html: "Given that you have already rephrased the keywords of the topic in the planning stage, this step should be relatively easy. When you do write this sentence, in addition to rephrasing words also try to rearrange the order of words in the sentence. This may necessitate changing some of the word forms. For instance you might have to change nouns into verbs. This shows the examiner your ability to use language flexibly and can increase your score for vocabulary and grammar." },
            { t: "model", html: "Some people believe that the <u>fast pace</u> (high-speed) and <u>stress</u> (pressure) of <u>modern life</u> (contemporary lifestyles) is having a <u>negative</u> (harmful) <u>effect</u> (influence) on <u>families</u> (family life).<br><br><strong>→</strong> Many people feel that family life is being harmed by the high-speed and pressure of contemporary lifestyles." },
            { t: "h", text: "2. State your position [totally / strongly / somewhat + agree / disagree]" },
            { t: "p", html: "It is important to state your position in the introduction of the essay because it makes it clearer for the examiner what your position is and also when the examiner reads the body of your essay they already have an overall idea of what your essay is about. Then, in the likely event that you have errors with vocabulary and grammar they may be less serious because the examiner will have more of a context in order to guess the meaning of what you are trying to express. You can simply state your opinion, and this may be best if you only need a score of around six or seven and you struggle to finish your essay on time. However you can state your opinion and also the reasons. If you are trying to get to 8 I believe it is better to state both your opinion and the reasons. Although this will slightly increase the word length, this adds to the quality of your introduction, and also assists your task response as the introduction and conclusion of your essay are considered as important in establishing a clear task response." },
            { t: "model", html: "I somewhat agree with this opinion because the fast pace leads to less time for families to be together, stress leads to arguments among family members; however, due to the increased time pressure and stress families are forced to cooperate more, which brings them closer together." },
            { t: "note", html: "I realise this is quite long and it may be beyond some writers. This is why a sentence of this quality can enable a candidate to get to level eight or nine." }
          ]
        },
        {
          id: "s-5-4-body", num: "5.4", page: 31, title: "Writing the body",
          blocks: [
            { t: "p", html: "After you have written the introduction, you will need two or three body paragraphs. For this type of essay, I suggest putting only one reason in each paragraph. A good paragraph should only have one main idea. You may write only two paragraphs if you are a person who likes to explain things in detail and use illustrative examples. If you prefer, you can write three shorter paragraphs. Whether you write two or three paragraphs may depend on the question and also the quality of points you have brainstormed. Personally, I would use three paragraphs if I were writing about both sides of the argument. This is because it is safest to have two paragraphs for the side you support more strongly and only one paragraph for the side you support less. This structure ensures your opinion is supported well, and prevents the risk of the body of the essay not matching your opinion." },
            { t: "h", text: "1. Write topic sentences for each body paragraph" },
            { t: "p", html: "Each body paragraph should start with a topic sentence. For this type of essay the topic sentence consists of three parts, which are the <strong>sequencing word</strong>, <strong>topic</strong>, and <strong>reason</strong> to support the opinion." },
            { t: "model", html: "Sequencing word + topic + <u>reason</u><br><br>The main reason why I believe <span style='color:#b4643c'>family life is being compromised</span> <u>is because families have less time to be with each other</u>." },
            { t: "h", text: "2. Write supporting sentences for the topic sentences" },
            { t: "p", html: "You can think of the topic sentence you have just written as being the introduction for the paragraph. It introduces the reason for your opinion, which forms the key point for the paragraph. Having a clear key point for the paragraph makes it easy for the examiner to understand what you are saying in the paragraph. In addition, if the key point of the paragraph is clear any errors with vocabulary or grammar will be less likely to prevent communication. This is because the examiner will have more of a context to guess any parts that are unclear. After you have written the topic sentence, you should support it by developing the key point. There are three ways to develop your key point: Explanation, example, adding details." },
            { t: "model", html: "<strong>Explanation:</strong> As individual family members are busier at work and with their social lives they have less time to spend with their family." },
            { t: "model", html: "<strong>Adding details:</strong> As well as this, people have many things they have to do these days such as checking e-mail, updating their online social status and so less time is left for family life." },
            { t: "model", html: "<strong>Example:</strong> To illustrate, I spend about two hours online every night attending to daily correspondence before chatting with my family members, whereas ten years ago I would spend time with my family from the moment I walked in the door." },
            { t: "note", html: "The example above could just consist of the first sentence. However, to fully make the point the second sentence is needed. This is the difference between a level 6 writer and a more competent writer." }
          ]
        },
        {
          id: "s-5-4-conc", num: "5.4", page: 32, title: "Writing the conclusion",
          blocks: [
            { t: "p", html: "In order to write an excellent conclusion, you should start by using a phrase that signals you are concluding your essay. Then, you should restate the position to reinforce it in the mind of the examiner. After this you should summarise the main points you made in the body of the essay because this is a standard feature of a concluding paragraph and also it will remind the examiner of your key points and make your opinion more persuasive. Finally, if you want to write a truly outstanding conclusion, and you have enough time, you could give a final comment based on your summary. If you are short of time just try to complete as many of the steps below that time permits. Note that if you are aware you are running out of time when writing the body of the essay, try to finish the body quickly and at least write something for this paragraph. If you do not have some sort of concluding paragraph the essay will be incomplete and the examiner may penalise you for cohesion and coherence. It will also make it difficult to get a high score for task response because the concluding paragraph is an important factor in assessing the task response." },
            { t: "h", text: "Send a signal you are concluding your essay" },
            { t: "p", html: "I like <em>in conclusion</em>. This is a universally accepted way to finish an academic essay. There are other choices but this works well and can be used for all three types of essays. Some students think it is boring to use this phrase. However, keep in mind there are no marks for creativity and flair. You are not doing creative writing; instead you are taking a language exam. Every time I read phrases like <em>in a nutshell</em>, I am not impressed; in fact, the word yuck comes to mind! You can use phrases like <em>to summarise</em>; the reason why I'm against these is because they do not fit my structure for a both-sides and opinion essay (for that essay your final paragraph will be your opinion and not a summary). I believe it is better to have a standard phrase that you can use for all three essays to avoid the need to remember different ones and to correctly apply them under pressure in the exam." },
            { t: "h", text: "Restate your position" },
            { t: "p", html: "You should restate your opinion along with the extent. This is good essay writing. This is the way it's done. Many students don't want to do this and feel they have already said it, so they don't want to say it again. Up to you! I believe you should restate your opinion." },
            { t: "model", html: "I somewhat believe that the rapid pace and stressful nature of contemporary lifestyles are having negative consequences on family relationships." },
            { t: "h", text: "Summarise the main points" },
            { t: "p", html: "If you have time it is very helpful for your task response to summarise the reasons for your opinion. Note that you should ideally use different words and phrases than in the body of your essay. If you do this well it can increase your score for vocabulary because it shows the examiner your range of vocabulary." },
            { t: "model", html: "This is because family members have less time, and when they are together they feel less relaxed. However, I admit that sometimes adversity can bring people closer together." },
            { t: "h", text: "Give your final opinion or recommendation / restate your position" },
            { t: "p", html: "If you have time, based on a summary, give your final opinion or make a recommendation. This is a way to really show the examiner your talent and reach a score of 8 or 9 for task response. This will really impress the examiner as it will show your understanding of what you've written and your ability to make further comment on it. This is a high-level language function." },
            { t: "model", html: "Given this situation it seems that family members should try to be more supportive to one another and also parents need to set aside regular times for families to relax together." }
          ]
        },
        {
          id: "s-5-5", num: "5.5", page: 34, title: "Model essay version 1: somewhat agree",
          blocks: [
            { t: "essay",
              prompt: "Some people believe that the fast pace and stress of modern life is having a negative effect on families. To what extent do you agree or disagree?",
              words: 340,
              paras: [
                "Many people feel that family life is being harmed by the high-speed and pressure of contemporary lifestyles. <u>I somewhat agree with this opinion</u> because the fast pace leads to less time for families to be together, and stress leads to arguments among family members; however, due to the increased time pressure and stress families are forced to cooperate more, which brings them closer together.",
                "<u>The main reason why I believe</u> family life is being compromised is because families have less time to be with each other. As individual family members are busier at work and with their social lives, they have less time to spend with their family. As well as this, people have many things they have to do these days such as checking e-mail, updating their online social status and so less time is left for family life. To illustrate, I spend about two hours online every night attending to daily correspondence before chatting with my family members, whereas ten years ago I would spend time with my family from the moment I walked in the door.",
                "<u>In addition</u>, the pressure of life these days means that even when families do get together arguments are more likely. This is because everyone feels tired and they are more likely to get irritated and to react to their heightened emotional levels.",
                "<u>However</u>, it does seem reasonable that this pressure may also lead to positive outcomes. One such possibility is that family members will cooperate more in order to overcome time limitations. For instance, they may share household chores, so that everybody has time to relax afterwards.",
                "<u>In conclusion, I somewhat believe</u> that the rapid pace and stressful nature of contemporary lifestyles are having negative consequences on family relationships. This is because family members have less time, and when they are together they feel less relaxed. However, I admit that sometimes adversity can bring people closer together. Given this situation, it seems that family members should try to be more supportive to one another and also parents need to set aside regular times for families to relax together."
              ]
            },
            { t: "note", html: "You may have noticed that the previous essay was rather long — about 340 words. This is because of a high level of paragraph development in paragraph 2. Paragraph development can increase the score for task response and also cohesion and coherence. However, if we do a lot of paragraph development we should consider having fewer paragraphs. The following model has only two body paragraphs. In addition, it only covers one side of the argument. I believe this is a better approach because it is more persuasive and there is less risk that when you cover the other side of the argument you end up contradicting what you have previously said. It also means that your introduction and conclusion will be shorter because there are fewer things you have to mention." }
          ]
        },
        {
          id: "s-5-6", num: "5.6", page: 35, title: "Template for opinion essay",
          blocks: [
            { t: "p", html: "The template below has been used to write the second version of the essay." },
            { t: "h", text: "Introduction" },
            { t: "model", html: "There is currently a contentious argument over whether XYZ [XYZ is the topic].<br>I totally agree/disagree with this opinion because [reason 1 + reason 2]." },
            { t: "h", text: "Paragraph 2" },
            { t: "model", html: "The main reason why I believe/don't believe XYZ is because… [reason 1]" },
            { t: "h", text: "Paragraph 3" },
            { t: "model", html: "Another reason why I support/don't support the notion that XYZ is due to the fact that… [reason 2]" },
            { t: "h", text: "Conclusion" },
            { t: "model", html: "In conclusion, I completely agree/disagree that XYZ because [rephrase reason 1] and [rephrase reason 2].<br>Given this situation, it seems that [give a final recommendation or opinion]." }
          ]
        },
        {
          id: "s-5-7", num: "5.7", page: 36, title: "Model essay version 2: totally agree",
          blocks: [
            { t: "essay",
              prompt: "Some people believe that the fast pace and stress of modern life is having a negative effect on families. To what extent do you agree or disagree?",
              words: 281,
              paras: [
                "<u>There is currently a contentious argument over whether</u> family life is being harmed by the high-speed and pressure of contemporary lifestyles. <u>I totally agree with this opinion because</u> the fast pace leads to less time for families to be together, and stress leads to arguments among family members.",
                "<u>The main reason why I believe</u> family life is being compromised is because families have less time to be with each other. This is due to family members being busier at work and with their social lives. As well as this, people have many things they have to do these days such as checking e-mail, updating their online social status and so less time is left for family life. <u>To illustrate</u>, I spend about two hours online every night attending to daily correspondence before chatting with my family members, whereas ten years ago I would spend time with my family as soon as I walked in the door.",
                "<u>Another reason why I support the notion that</u> families are being impacted negatively is that the pressure of life these days means that even when families do get together arguments are more likely. This is because everyone feels tired and they are more likely to get irritated and to react to their heightened emotional levels.",
                "<u>In conclusion, I completely agree that</u> the rapid pace and stressful nature of contemporary lifestyles are having negative consequences on family relationships. This is because family members have less time, and when they are together they feel less relaxed. <u>Given this situation, it seems that</u> family members should try to be more supportive to one another and also parents need to set aside regular times for families to relax together."
              ]
            }
          ]
        },
        {
          id: "s-5-8", num: "5.8", page: 37, title: "More sample questions of opinion essays",
          blocks: [
            { t: "list", items: [
              "Some people believe that arts like music and painting should not be funded by the government. Others believe that these are important for a society and need government funding. <em>Do you agree or disagree?</em>",
              "More and more students choose to move to other countries to study their higher education. <em>Do you think the advantages of this outweigh its disadvantages?</em>",
              "Some people believe that local shopping markets are the best places to shop, while others believe that modern shopping centres are better. <em>Do the advantages of local markets outweigh the disadvantages?</em>",
              "To improve road safety there should be more severe punishments for drivers who break the rules. <em>To what extent do you agree or disagree?</em>"
            ]}
          ]
        },
        {
          id: "s-5-9", num: "5.9", page: 38, title: "Common mistakes",
          blocks: [
            { t: "h", text: "Unclear opinion" },
            { t: "p", html: "In the example below the candidate fails to fully make clear their opinion in the introduction. The examiner can only guess that the candidate agrees, and has no idea of the extent. In this case this is not a good introduction, and this has a negative effect on task response and also cohesion and coherence." },
            { t: "callout", title: "Task", html: "Television has brought great changes to the way many children spend their leisure time. Many people believe these changes have been beneficial. <em>To what extent do you agree or disagree?</em>" },
            { t: "model", html: "<strong>The candidate writes:</strong> Nowadays, children spend a lot of time watching television. It seems that there are other wider variety of television shows and many more channels. <em>(The opinion and extent are missing.)</em>" },
            { t: "h", text: "Choosing the wrong side to argue" },
            { t: "p", html: "For opinion essays I don't think you should think about what you really believe, you should think which side is easier to argue and use high-level language. In other words, the best side to choose is the one that you can maximize your score for the four grading criteria." },
            { t: "h", text: "Contradicting your opinion" },
            { t: "p", html: "The example below shows how an opinion can easily be contradicted in the conclusion of an essay. The writer contradicts the opinion stated in the introduction that they somewhat disagree with the widespread use of technology, by stating in the conclusion that technology needs to be learnt." },
            { t: "callout", title: "Task", html: "Today, more and more young children have electronic gadgets such as computers and mobile phones. Some people say that this is a positive development. <em>Do you agree or disagree?</em>" },
            { t: "model", html: "<strong>Contradicting opinion:</strong> In summary, <u>although it is necessary for children to learn to use these devices at a young age</u> I somewhat disagree that the widespread use of computers among children is a positive development." },
            { t: "h", text: "Errors when making concessions" },
            { t: "p", html: "Essays that ask for your opinion have words in the question such as “to what extent do you agree,” “what is your opinion,” “do you agree or disagree.” My advice to students is always to say that you totally agree/disagree and only focus on one side of the argument. I would only write “somewhat agree/disagree” if I didn't have enough things to say about one side of the argument. I have three main reasons for this:" },
            { t: "steps", items: [
              "It is more persuasive and therefore leads to a higher score for task response. This is because when the examiner thinks about the extent you have convinced them of your opinion it is more powerful when you have just argued about one side.",
              "It is much more difficult to structure an essay this way and it is more likely to have issues with cohesion and coherence and it may take longer to write the essay.",
              "It is less likely you will end up arguing against yourself. I have read many essays where the writer says they “somewhat agree” but then they have gone on to write the body of the essay and less has been mentioned about agreeing than disagreeing. In this case, your score for task response will be limited to 6 because your opinion does not match the main points of your essay. As well as this your score for cohesion and coherence may be lowered because confusion may be created in the mind of the reader.",
              "Finally, concessions (where you argue against your main position) can lead to total confusion when the candidate makes errors with grammar and vocabulary. In other words it is risky to write a concession because if you make errors with vocabulary and grammar the meaning can be totally unclear and then your score will go spiralling down for all four criteria."
            ]}
          ]
        }
      ]
    },

    /* =====================================================
       PART III — BOTH SIDES + OPINION ESSAY
       ===================================================== */
    {
      id: "bothsides",
      label: "Part III",
      title: "Both Sides & Opinion Essay",
      sections: [
        {
          id: "s-6", num: "6", page: 40, title: "Both sides and opinion essay",
          blocks: [
            { t: "p", html: "This type of essay tests your ability to discuss both sides of an argument and also give your own opinion and then support it with logical reasons. To score well you need to argue both sides of an argument clearly and give your own opinion along with a logical justification for it." }
          ]
        },
        {
          id: "s-6-1", num: "6.1", page: 40, title: "Typical question words",
          blocks: [
            { t: "list", items: [
              "Discuss the advantages and disadvantages",
              "Discuss the advantages and disadvantages and give your own opinion",
              "Discuss both sides of this argument and then give your own opinion"
            ]},
            { t: "callout", title: "Sample task", html: "Some people think that the education system should only focus on preparing students for employment, while others believe it has other important functions.<br><br><em>Discuss both sides and then give your own opinion.</em>" }
          ]
        },
        {
          id: "s-6-2", num: "6.2", page: 40, title: "Task analysis",
          blocks: [
            { t: "p", html: "It is important to realise that every task contains a topic and a question. You must fully address both the topic and the question to score six and above for task response. An analysis of the topic and question is provided below:" },
            { t: "p", html: "<strong>Topic:</strong> Some people think that the education system should only focus on preparing students for employment, while others believe it has other important functions." },
            { t: "p", html: "This type of topic always expresses two points of view. It is important to always see what the two points of view are. In this case the topic of the essay is about whether schools should only prepare students for their future careers or not. In other words it is <strong>careers purposes vs. other purposes</strong>." },
            { t: "p", html: "<strong>Question:</strong> <em>Discuss both sides and then give your own opinion.</em>" },
            { t: "p", html: "The question has three requirements. You must discuss each side of the argument from a neutral point of view and then give your opinion, which is your view on the argument. In order to score a six and above you need to make sure you meet all three requirements of the question. To get to 7 you must answer all three requirements fully. In order to make your opinion clear I believe it is best to keep your opinion out of the introduction and body of the essay. If you put it into the introduction you risk making it sound like the essay is just about your opinion, which is misleading to the reader. If you put your opinion in the body of the essay, then you risk it becoming unclear to the examiner whether you have completed all three requirements. Essentially it becomes difficult to see both sides and your opinion. I believe it is best to hold your opinion for the conclusion of the essay. A typical error students make is to not say sufficient about their opinion. One sentence is clearly not enough to get to 7." }
          ]
        },
        {
          id: "s-6-3", num: "6.3", page: 42, title: "Planning your essay",
          blocks: [
            { t: "steps", items: [
              "<strong>Underline key vocabulary in the topic and write words with the same or related meaning.</strong><br>Some people think that the <u>education system</u> (schools) should only <u>focus on preparing students</u> (concentrate on getting pupils ready) for <u>employment</u> (career), while others believe it has <u>other important functions</u> (additional purposes).",
              "<strong>Decide what kind of response is needed.</strong><br><em>Discuss both sides and then give your own opinion</em> = you need to give reasons to support each side of the argument and then give your own personal opinion on the argument.",
              "<strong>Brainstorm key points for the answer</strong> [two main points for each side of the argument is ideal]."
            ]},
            { t: "table",
              head: ["Only preparing students for careers", "Other functions"],
              rows: [
                ["Leads to better careers and more $$$", "Skills — to make the students well-rounded, such as communication skills and how to use technology"],
                ["Leads to a better workforce which gives benefits to society", "Morals and ethics — to make the society better"]
              ]
            },
            { t: "table",
              head: ["Your opinion"],
              rows: [
                ["1. Both sides of the argument are merits.<br>2. More strongly support <strong>other functions</strong>…<br>…because if the students are well-rounded they will be more successful in their lives and contribute more to society."]
              ]
            },
            { t: "steps", start: 4, items: [
              "<strong>Decide on the structure of the essay.</strong> This essay is easy to structure — for every question you can always structure it as follows:<br>Paragraph 1: Introduction<br>Paragraph 2: Side A of the argument [Only preparing students for careers]<br>Paragraph 3: Side B of the argument [Other functions]<br>Paragraph 4: Conclusion [your opinion]"
            ]}
          ]
        },
        {
          id: "s-6-4", num: "6.4", page: 44, title: "Steps in writing your essay",
          blocks: [
            { t: "p", html: "Once you have written a solid plan for your essay, you can begin the task of actually writing the essay. Having a good plan will speed up this process and ensure that you meet all three requirements of this type of question [both sides and your opinion]. It will also ensure that you have a good balance for the essay. What I mean here is that you should cover both sides of the argument roughly equally. So, if you plan two points for each side of the argument this will help you to achieve it." },
            { t: "h", text: "Introduction — 1. Paraphrase the question" },
            { t: "p", html: "Given that you have already rephrased the keywords of the topic in the planning stage, this step should be relatively easy. When you write this sentence, in addition to rephrasing words also try to rearrange the order of words in the sentence. This may necessitate changing some of the word forms. For instance you might have to change nouns into verbs. This shows the examiner your ability to use language flexibly and can increase your score for vocabulary and grammar." },
            { t: "model", html: "Some people think that the <u>education system</u> (schools) should only <u>focus on preparing students</u> (concentrate on getting pupils ready) for <u>employment</u> (career), while others believe it has <u>other important functions</u> (additional purposes).<br><br><strong>→</strong> Many people feel that getting pupils ready for their careers should be the main focus of schools, whereas others believe that schools should have additional purposes." },
            { t: "h", text: "2. Say what the essay is about" },
            { t: "p", html: "This sentence can always be written the same for every question of this type, as follows:" },
            { t: "model", html: "This essay discusses both sides of this argument, and then I will give my own perspective." },
            { t: "p", html: "Nothing more is required in the introduction. You should try to memorise a sentence like this for this type of essay because you will be able to write it very quickly and without any errors with vocabulary and grammar. The introduction for this type of essay is the easiest of the three types of essays. If you want to use a slightly different sentence:" },
            { t: "model", html: "The purpose of this essay is to analyse both sides of this argument and then I will give my own perspective." }
          ]
        },
        {
          id: "s-6-5", num: "6.5", page: 46, title: "Model essay 1",
          blocks: [
            { t: "essay",
              prompt: "Some people think that the education system should only focus on preparing students for employment, while others believe it has other important functions. Discuss both sides and then give your own opinion.",
              words: null,
              paras: [
                "Many people feel that getting pupils ready for their careers should be the main focus of schools, whereas others believe that schools should have additional purposes. This essay discusses both sides of this argument and then I will give my own perspective.",
                "There are merits of schools only focusing on preparing young people for their working lives. If young people are better prepared for their careers they will be more successful in their working lives. As well as this, they will also make more money and be able to support themselves better. To illustrate, some recent stories in the media highlighted that students who finish high school are less likely to be unemployed, and more likely to earn higher salaries. In addition, by schools preparing young people for jobs there will be a better prepared workforce. This benefits society by raising productivity and ensuring that employers have the necessary labour they need.",
                "However, there are also advantages of schools having other functions. First of all, they should teach students skills to make them well-rounded. By teaching communication skills and how to use technology the students will be better rounded individuals. Clearly, these are important skills in today's society and so they should be learnt at school. As well as this schools should teach morals and ethics because this will make the society better. Many people feel that this aspect of schooling has become neglected, and has led to a deterioration of society.",
                "In conclusion, <u>I believe</u> both sides of the argument have their merits. On balance, however, it seems that schools should have other functions. This is because if the students are well-rounded they will be more successful in their lives and contribute more to society."
              ]
            }
          ]
        },
        {
          id: "s-6-6", num: "6.6", page: 47, title: "Template for a both sides and opinion essay",
          blocks: [
            { t: "p", html: "The template below contains about 130 words. The advantage of this template is that it can be used for any type of both-sides-and-opinion essay. Memorising and using this template can help you to speed up the writing of your essay [you have less language to think of], and also help you to increase your score as you have a lower proportion of errors [this is error-free language], and also increase your score for vocabulary and grammar because the template has high-level vocabulary and grammar embedded in it." },
            { t: "h", text: "Introduction" },
            { t: "model", html: "A highly controversial issue today relates to … In this essay, I am going to examine this question from both points of view and then give my own opinion on the matter." },
            { t: "h", text: "Body paragraph 1" },
            { t: "model", html: "On one side of the argument there are people who argue that the benefits of … considerably outweigh its disadvantages. The main reason for believing this is that … It is also possible to say that … One good illustration of this is …" },
            { t: "h", text: "Body paragraph 2" },
            { t: "model", html: "On the other hand, it is also possible to make the opposing case. It is often argued that in fact … People often have this opinion because … A second point is that … A particularly good example here is …" },
            { t: "h", text: "Conclusion" },
            { t: "model", html: "In conclusion, I believe both arguments have their merits. On balance, however, I feel that … This is because …" }
          ]
        },
        {
          id: "s-6-model2", num: "◈", page: 48, title: "Model essay 2 (using the template)",
          blocks: [
            { t: "essay",
              prompt: "Some people believe that there should be the death penalty for extremely serious crimes. Others believe that it is not morally correct to kill criminals. Discuss both these views and give your own opinion.",
              words: 267,
              paras: [
                "One of the most controversial issues today relates to <u>capital punishment</u>. In this essay, I am going to examine this question from both points of view and then give my own opinion on the matter.",
                "On one side of the argument there are people who argue that the benefits of <u>killing violent criminals</u> considerably outweigh its disadvantages. The main reason for believing this is that <u>the fear of execution acts as a deterrent to commit serious crimes such as rape and murder.</u> It is also possible to say that <u>the execution of a criminal may bring relief to the suffering victims.</u> One good illustration of this is <u>when Saddam Hussein was executed. Many of the victims who were persecuted under his rule expressed joy and relief when he was finally captured and killed.</u>",
                "On the other hand, it is also possible to make the opposing case. It is often argued that in fact <u>sentencing criminals to death is just committing another murder.</u> People often have this opinion because <u>they think that it is immoral to take another person's life, no matter what the reason is.</u> A second point is that <u>many religions are opposed to any form of murder.</u> A particularly good example here is <u>from the bible, which lists killing another person as one of the Ten Commandments that should not be broken.</u>",
                "In conclusion, I believe both arguments have their merits. On balance, however, I feel that <u>capital punishment is justified. This is because in cases of extreme crime that deterring crime is more important than taking the moral high ground.</u>"
              ]
            }
          ]
        }
      ]
    },

    /* =====================================================
       PART IV — TWO QUESTION ESSAY
       ===================================================== */
    {
      id: "twoquestion",
      label: "Part IV",
      title: "Two Question Essay",
      sections: [
        {
          id: "s-7", num: "7", page: 56, title: "Two question essay",
          blocks: [
            { t: "p", html: "This type of question is sometimes also known as a <em>problem and solution essay</em>. I do not call it this because it is not always about problems and solutions. This type of question tests your ability to discuss two aspects of an issue. To score well you must answer BOTH questions well. Therefore you should respond to each of the questions equally." }
          ]
        },
        {
          id: "s-7-1", num: "7.1", page: 56, title: "Sample question words",
          blocks: [
            { t: "list", items: [
              "What problem does this cause? What are some potential solutions?",
              "What are the causes of this problem? What are some potential solutions?",
              "Do you agree or disagree? What are some solutions?"
            ]},
            { t: "callout", title: "Sample task", html: "Some people think that in the future lots of changes will occur that will improve our society.<br><br><em>Do you agree or disagree? What kind of changes will occur?</em>" }
          ]
        },
        {
          id: "s-7-2", num: "7.2", page: 56, title: "Task analysis",
          blocks: [
            { t: "p", html: "It is important to realise that every task contains a topic and a question. You must fully address both the topic and the question to score six and above for task response. An analysis of the topic and question is provided below:" },
            { t: "p", html: "<strong>Topic:</strong> Some people think that in the future lots of changes will occur that will improve our society." },
            { t: "p", html: "<strong>Question 1:</strong> <em>Do you agree or disagree?</em><br><strong>Question 2:</strong> <em>What kind of changes will occur?</em>" }
          ]
        },
        {
          id: "s-7-3", num: "7.3", page: 57, title: "Planning the essay",
          blocks: [
            { t: "steps", items: [
              "<strong>Underline key vocabulary in the topic and write words with the same or related meaning.</strong><br>Some people think that in the <u>future</u> (in the years to come) lots of <u>changes will occur</u> (developments are going to happen) that will <u>improve</u> our <u>society</u> (make life better).",
              "<strong>Decide what kind of response is needed.</strong><br><em>Do you agree or disagree?</em> = Say whether you agree or disagree.<br><em>What kind of changes will occur?</em> = State what changes might happen.",
              "<strong>Brainstorm key points for the answer.</strong>"
            ]},
            { t: "table",
              head: ["Question one: agree the changes will be positive", "Question two: changes that will occur"],
              rows: [
                ["Life is becoming more convenient [technology leads to convenience]", "More time-saving technology, such as robots to do our housework."],
                ["Better entertainment", "New technologies to enhance our entertainment. For instance 3-D television will soon become commonplace in our living rooms."]
              ]
            },
            { t: "steps", start: 4, items: [
              "<strong>Decide on the structure of the essay.</strong> This essay can always be structured the same based on the two questions that are asked:<br>Introduction = rephrase the topic and introduce both questions<br>Question one = write exactly two main points to support your response<br>Question two = write exactly two main points to support your response<br>Conclusion = summarise your main points about each question"
            ]}
          ]
        },
        {
          id: "s-7-4", num: "7.4", page: 59, title: "Steps in writing your essay",
          blocks: [
            { t: "p", html: "Once you have written a solid plan for your essay, you can begin the task of actually writing the essay. Having a good plan will speed up this process and ensure that you are consistent with your opinion throughout. The introduction will fit the body of the essay, and the conclusion will summarise the points from the body of the essay. If you achieve this high level of fit, you are likely to score well for task response and cohesion and coherence." },
            { t: "h", text: "Introduction — 1. Paraphrase the question" },
            { t: "p", html: "Given that you have already rephrased the keywords of the topic this step should be relatively easy. When you do write this sentence, in addition to rephrasing words also try to rearrange the order of words in the sentence. This may necessitate changing some of the word forms. For instance you might have to change nouns into verbs. This shows the examiner your ability to use language flexibly and can increase your score for vocabulary and grammar." },
            { t: "model", html: "Some people think that in the <u>future</u> (in the years to come) lots of <u>changes will occur</u> (developments are taking place) that will <u>improve</u> our <u>society</u> (make life better).<br><br><strong>→</strong> As a result of developments that are taking place, many people believe that life will become better." },
            { t: "h", text: "2. Introduce what the essay is about" },
            { t: "p", html: "It is important to make it clear what the essay is about because it makes it clear to the examiner you understand that there are two questions. Also, when the examiner reads the body of your essay they already have an overall idea of what your essay is about, and in the likely event that you have errors with vocabulary and grammar they may be less serious because the examiner will have more of a context in order to guess the meaning of what you are trying to express. You can simply state what the essay is about using a phrase like <em>this essay discusses</em>, and then add on a rephrase of the two questions:" },
            { t: "model", html: "This essay discusses the reasons why the changes that are coming are positive, and also suggests what kind of changes will occur." }
          ]
        },
        {
          id: "s-7-4-body", num: "7.4", page: 60, title: "Writing the body",
          blocks: [
            { t: "p", html: "After you have written the introduction, you will need exactly two body paragraphs. You should have a paragraph for each of the questions. A good paragraph should only have one main idea. The main idea for each paragraph is the question you are responding to. You should then have exactly two main points to support each question. This ensures that you get the right balance for the essay. What I mean here is that you should say about the same amount for each of the questions. You should not focus on one of the questions more than the other. You can then support each of these main points by explaining it or giving an example to illustrate it. In order to keep the size of your essay manageable, you might choose to have a major and minor point in each paragraph. The major point may use three sentences and the minor point 2 sentences. For instance, you might use this structure:" },
            { t: "list", items: [
              "s1 topic sentence: make it clear which question you are discussing",
              "s2: introduce the main point",
              "s3: explain the main point",
              "s4: give an example to illustrate the main point",
              "s5: minor point",
              "s6: explain or give an example to illustrate the minor point"
            ]},
            { t: "h", text: "1. Write topic sentences for each body paragraph" },
            { t: "p", html: "Each body paragraph should start with a topic sentence. For this type of essay the topic sentence should clearly identify which of the questions is being responded to." },
            { t: "model", html: "The changes that are coming are positive for two main reasons. [Responds to causes]" },
            { t: "h", text: "2. Write supporting sentences for the topic sentences" },
            { t: "p", html: "You can think of the topic sentence you have just written as being the introduction for the paragraph. It introduces the question you are responding to, which forms the key point for the paragraph. Having a clear key point for the paragraph makes it easy for the examiner to understand what you are saying. In addition, if the key point of the paragraph is clear any errors with vocabulary or grammar will be less likely to prevent communication. There are three ways to develop your key point: Explanation, example, adding details." },
            { t: "model", html: "<strong>Explanation:</strong> The main reason is that they will make our lives more convenient." },
            { t: "model", html: "<strong>Adding details:</strong> We are likely to have more free time as a result of technology taking over many of our everyday tasks." },
            { t: "model", html: "<strong>Example:</strong> For example, we may have robots capable of doing many household chores." },
            { t: "h", text: "Conclusion" },
            { t: "p", html: "You only need to do two things in the final paragraph of this type of essay and they are always the same. First you need to signal that this is the concluding paragraph and second you should summarise your main points for each question." },
            { t: "model", html: "In conclusion, the future looks promising because we will have technology take over many of life's mundane tasks and we'll have better forms of entertainment. The most likely changes appear to be technologies to save us time and also enhance our leisure time." }
          ]
        },
        {
          id: "s-7-5", num: "7.5", page: 62, title: "Model essay one",
          blocks: [
            { t: "essay",
              prompt: "Some people think that in the future lots of changes will occur that will improve our society. Do you agree or disagree? What kind of changes will occur?",
              words: 256,
              paras: [
                "As a result of developments that are taking place, many people believe that life will become better. This essay discusses the reasons why the changes that are coming are positive, and also suggests what kind of changes will occur.",
                "The changes that are coming are positive for two main reasons. The main reason is that they will make our lives more convenient. We are likely to have more free time as a result of technology taking over many of our everyday tasks. For example, we may have robots capable of doing many household chores, and this will enable us to have more free time for enjoyment and relaxation. Another factor is that our recreational time will be enhanced by new technologies that make our entertainment even more fun. If we enjoy ourselves more we will be happier and more relaxed.",
                "There are two main types of developments that are likely to occur. The first of these is time-saving technologies. Future enhancements of robotics are likely to lead to even more household tasks being performed by machines. As well as this, the entertainment industry looks likely to soon make enhancements to our recreational experiences by making new technologies available. A good example of this is 3-D television, which will make watching movies even more fun.",
                "In conclusion, the future looks promising because we will have technology takeover many of life's mundane tasks and we'll have better forms of entertainment. The most likely changes appear to be technologies to save us time and also enhance our leisure time."
              ]
            }
          ]
        },
        {
          id: "s-7-6", num: "7.6", page: 63, title: "Template for a two question essay",
          blocks: [
            { t: "p", html: "It is difficult to build a standardised template for our two question essay because a wide variety of questions can be asked. First a general template will be given and then a more specific template will be given for a typical problem and solution essay." },
            { t: "h", text: "General template" },
            { t: "model", html: "<strong>Introduction:</strong> Rephrase the topic. This essay discusses … [Question one] + [question two]." },
            { t: "model", html: "<strong>Body:</strong> Question one [try to write two main points to respond to this question]. Question two [try to write two main points to respond to this question]." },
            { t: "model", html: "<strong>Conclusion:</strong> In conclusion, [summarise the two main points about question one] [summarise the two main points about question two]." },
            { t: "h", text: "Template for the problem and solution essay (with gaps for the topic)" },
            { t: "p", html: "Note that this is the original form of a two question essay that gets asked and it is essentially the same as the essay above and follows the same format. The question type is quite commonplace and you can use the template below for any essay of this type." },
            { t: "model", html: "… is becoming increasingly serious in many nations. Although … threatens many societies, its / their effects can also be combated successfully. This essay looks at some of the problems caused by … on society, and suggests some solutions to the problems." },
            { t: "model", html: "… causes multiple problems. The … effects are very obvious. For example, … In some cases, such as … even leads to (death). The second effect is … People who … become …" },
            { t: "model", html: "However, the menace of … can be fought. Education is the main way to tackle this issue. People need to be aware of the effects so that they can avoid this problem. In addition, the government could also … This is a good approach because …" },
            { t: "model", html: "In conclusion, … is a serious issue because it causes harmful effects on people's health and people who are … The best approaches to deal with it are to educate people about its damaging effects, and also for the government to … Although the problem is unlikely to be entirely eliminated in the short term there are concrete steps to reduce the effects it is having on the current society. [about 175 words]" }
          ]
        },
        {
          id: "s-7-7", num: "7.7", page: 65, title: "Model essay two [problem and solution]",
          blocks: [
            { t: "essay",
              prompt: "The use of illegal drugs, such as heroin and cocaine, are becoming more and more common in many countries. What are some of the problems associated with drug abuse, and what are some of the possible solutions?",
              words: 260,
              paras: [
                "<u>Drug abuse</u> is becoming increasingly serious in many nations. Although <u>drugs</u> threaten many societies, their effects can also be combated successfully. This essay looks at some of the problems caused by <u>drug use</u> on society, and suggests some solutions to the problems.",
                "<u>Drug abuse</u> causes multiple problems for countries and communities. The <u>medical</u> effects are very obvious. For example, <u>addicts abuse their bodies and neglect their health, and so eventually require expensive treatment or hospitalization.</u> In some cases, such as <u>Marilyn Monroe, a drug overdose</u> even leads to <u>death.</u> The second effect is <u>crime.</u> People who <u>take drugs</u> become <u>crazy and irrational and often cause harm and danger to themselves and others.</u>",
                "However, the menace of <u>drugs</u> can be fought. Education is the main way to tackle this issue. People need to be aware of the effects so that they can avoid this problem. In addition, the government could also <u>use infomercials to educate their citizens.</u> This is a good approach because <u>they can alert all citizens about the negative aspects of using drugs.</u>",
                "In conclusion, <u>drug abuse</u> is a serious issue because it causes harmful effects on people's health and people who are <u>high often commit crimes.</u> The best approaches to deal with it are to educate people about its damaging effects, and also for the government <u>to ensure all people are aware of the consequences through public service advertising.</u> Although the problem is unlikely to be entirely eliminated in the short term these are concrete steps to reduce the effects it is having on the current society."
              ]
            }
          ]
        }
      ]
    }
  ]
};

if (typeof module !== "undefined") module.exports = GUIDE;
