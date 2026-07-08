import { FC, useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Search,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Filter,
  BookOpen,
} from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: "Academics" | "Events" | "Campus Life" | "Achievements";
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title:
      "Prestigious investiture ceremony of Pavna International School took place on August 28",
    excerpt:
      "The prestigious investiture ceremony of Pavna International School took place on August 28, graced by Chairman Mr. Swapnil Jain, Vice Chairperson Ms. Priya Jain, and esteemed guests, comprising Principals Ms. Aarti Jha from DPS Aligarh and Ms. Rajni Singh from DPS Civil Lines. The event commenced with a captivating performance by the school’s talented student band, setting the tone for the celebration of leadership. The new student council members stepped onto the stage for the oath-taking ceremony, wholeheartedly pledging their dedication to upholding the school’s core values. In his address, Chairman Mr. Swapnil Jain encouraged students to embrace life’s every facet with enthusiasm, while Principal Ms. Aarti Nigam highlighted the responsibilities that come with leadership. The Director of Academics, Mr. Stephen Sibthorpe, extended congratulations, marking the beginning of their journey as school value ambassadors. The event’s atmosphere was filled with a sense of unity and aspiration, as the students Council members pledged to nurture a positive school environment. It reminded students that leadership involves collaborative goal achievement with integrity and dedication, emphasizing the essence of accountability and leadership.",
    category: "Events",
    date: "August 28, 2025",
    readTime: "5 min read",
    image: "https://imgh.in/host/s2ruf8",
  },
  {
    id: "post-2",
    title:
      "In honour of the nation’s 77th Independence Day, Pavna International School hosted  a vibrant celebration",
    excerpt:
      "In honour of the nation’s 77th Independence Day, Pavna International School hosted  a vibrant celebration. The festivities began with a respectful guard of honor, symbolizing a tribute to the sacrifices of our freedom fighters. The event proceeded with the dignified unfurling of the national flag, accompanied by stirring speeches and a medley of captivating cultural performances. The event was skillfully led by the dynamic hosts, Nandini and Vardan, who ensured an immersive and engaging experience. The Principal, Ms. Aarti Nigam, addressed the audience to eloquently emphasize the struggles endured by the brave freedom fighters, underscoring the imperative of recognizing and respecting their dedication to fully embrace the meaning of our freedom. The Chairman, Mr. Swapnil Jain, and Vice Chairperson, Ms. Priyan Jain, were present to grace the occasion. The celebration served as a poignant reminder for everyone present to introspect on our nation’s history, nurture a deep appreciation for the precious gift of liberty, and unite wholeheartedly to propel the country towards greater progress.",
    category: "Events",
    date: "August 15, 2025",
    readTime: "4 min read",
    image: "https://imgh.in/host/qu6kkh",
  },
  {
    id: "post-3",
    title:
      "Fostering a Global Mindset: How Pavna International School, Hathras Prepares Students for the Future",
    excerpt:
      "In today’s rapidly changing world, it is essential for students to develop a global mindset that allows them to navigate the complexities of an interconnected world. Pavna International School, Aligarh, prepares students for the future by fostering a global mindset through a world-class Cambridge International Curriculum, cross-cultural experiences, and real-world skill development. In this blog, we will explore how these elements come together to create well-rounded, globally aware individuals.  ",
    category: "Campus Life",
    date: "July 24, 2025",
    readTime: "5 min read",
    image: "https://imgh.in/host/dh00oy",
  },
  {
    id: "post-4",
    title:
      "Celebrating Student Achievements: Success Stories from Pavna International School, Hathras",
    excerpt:
      "At Pavna International School, Aligarh, the commitment to academic excellence and holistic development has led to numerous student achievements, both inside and outside the classroom. We will celebrate some of the remarkable success stories of students from this prestigious institution, showcasing the impact of a well-rounded education.",
    category: "Achievements",
    date: "June 18, 2025",
    readTime: "6 min read",
    image: "https://imgh.in/host/4a7g5s",
  },
  {
    id: "post-5",
    title:
      "Inside Pavna International School, Hathras: A day in the life of a Cambridge International School student",
    excerpt:
      "Follow our secondary scholars as they experience immersive morning laboratory experiments, competitive afternoon sports routines, and creative evening arts workshops.",
    category: "Campus Life",
    date: "June 10, 2025",
    readTime: "4 min read",
    image: "https://imgh.in/host/ilw26o",
  },
  {
    id: "post-6",
    title:
      "A Parent’s Guide to Choosing Pavna International School, Hathras for Your Child’s Education",
    excerpt:
      "Selecting the right school for your child’s education is a crucial decision that can have a lasting impact on their growth and development. Pavna International School, Aligarh, offers a comprehensive educational experience that nurtures academic excellence, holistic development, and a supportive environment for students. In this parent’s guide, we will explore the key factors that make Pavna International School the ideal choice for your child’s education. ",
    category: "Academics",
    date: "May 29, 2025",
    readTime: "5 min read",
    image: "https://imgh.in/host/amm3nk",
  },
  {
    id: "post-7",
    title:
      "Transforming Education: The Role of Technology at Pavna International School, Hathras",
    excerpt:
      "Schools in today’s fast-paced, technologically driven world must change and develop to keep up with students’ learning demands. The students and faculty at Pavna International School in Aligarh credit technology for significantly improving the quality of their education. In this piece, we’ll look at how Pavna International School incorporates technology into its lessons and how that’s helped its students. ",
    category: "Academics",
    date: "May 15, 2025",
    readTime: "5 min read",
    image: "https://imgh.in/host/4nwb89",
  },
  {
    id: "post-8",
    title:
      "Embrace Holistic Learning at Pavna International School, Hathras: A Cambridge International School Affiliate",
    excerpt:
      "Holistic learning is an educational approach that focuses on the development of the whole person, encompassing academic, social, emotional, and physical growth. At Pavna International School, Aligarh, a Cambridge International School Affiliate, students can embrace this holistic learning philosophy to become well-rounded individuals prepared for the challenges and opportunities of the 21st century. In this article, we will explore the key aspects of holistic learning at Pavna International School, Aligarh. ",
    category: "Campus Life",
    date: "April 20, 2025",
    readTime: "4 min read",
    image: "https://imgh.in/host/f49z1x",
  },
  {
    id: "post-9",
    title:
      "Empowering students for success: The unique approach of Pavna International School, Hathras",
    excerpt:
      "It is crucial for schools in today’s quickly developing world to provide pupils with the knowledge and abilities they’ll need to succeed in both their personal and professional endeavors. Unlike other schools, Pavna International School in Aligarh places a premium on providing each student with individualized instruction, a well-rounded education, and marketable skills. In this piece, we’ll look at what makes Pavna International School’s approach unique, and how it helps students prepare for successful futures.",
    category: "Academics",
    date: "April 5, 2025",
    readTime: "5 min read",
    image: "https://imgh.in/host/3k13iq",
  },
  {
    id: "post-10",
    title:
      "Pavna International School, Hathras: Shaping global leaders with a Cambridge International School curriculum",
    excerpt:
      "It’s more crucial than ever to provide our kids with the skills they’ll need to take on the problems and seize the possibilities of tomorrow’s world. The mission of Pavna International School, Aligarh, is to educate the next generation of global leaders by providing them with the rigorous and enriching Cambridge International School curriculum. In this article, we’ll look at how the Cambridge curriculum is implemented at Pavna International School in Aligarh, India, and how it aids in shaping students into well-rounded, self-assured, and internationally competent citizens. ",
    category: "Academics",
    date: "March 25, 2025",
    readTime: "6 min read",
    image: "https://imgh.in/host/8ye7si",
  },
  {
    id: "post-11",
    title:
      "Discover the benefits of a Cambridge international education at Pavna International School, Hathras",
    excerpt:
      "Choosing the right education for your child is a crucial decision that can significantly impact their future. Pavna International School, Aligarh, provides students with the opportunity to pursue a Cambridge International Education, offering a world-class curriculum that nurtures academic excellence, global perspectives, and holistic development. In this article, we will delve into the benefits of a Cambridge International Education at Pavna International School, Aligarh. ",
    category: "Academics",
    date: "March 12, 2025",
    readTime: "4 min read",
    image: "https://imgh.in/host/xia0zk",
  },
  {
    id: "post-12",
    title:
      "Unlocking excellence at Pavna International School: A Cambridge International School affiliate",
    excerpt:
      "A comprehensive education that equips students for the challenges of the global stage is essential in today’s fast-paced and interconnected society. Just that is being carried out by Pavna International School, an affiliate of Cambridge International School. Pavna International School, a favorite choice for both parents and students, has earned a reputation for academic brilliance by providing a thorough and well-rounded curriculum.",
    category: "Achievements",
    date: "February 18, 2025",
    readTime: "5 min read",
    image: "https://imgh.in/host/w3bkcb",
  },
  {
    id: "post-13",
    title:
      "A book written by a six-year-old student of Pavna International School",
    excerpt:
      "A book written by a six-year-old student named Daksh Shetty of Pavna International School. The book is titled “The Battle Against the Evil Sheep”. This book is an amazing story of a brave shepherd boy who rises to the occasion to save his flock of sheep from an evil sheep.",
    category: "Achievements",
    date: "February 5, 2025",
    readTime: "4 min read",
    image: "https://imgh.in/host/bktz9j",
  },
  {
    id: "post-14",
    title: "PIS organise the launch pad event collaborated with WAO Podium",
    excerpt:
      "In partnership with WAO Podium, our students pitched forward-thinking business models, showcasing outstanding teamwork, speech delivery, and entrepreneurial spirit.",
    category: "Events",
    date: "January 28, 2025",
    readTime: "5 min read",
    image: "https://imgh.in/host/r5fmgo",
  },
  {
    id: "post-15",
    title:
      "Making a racing car by students of PIS  inauguration by the Chairman, Mr. Swapnil Jain",
    excerpt:
      "Honorable Chairman Mr. Swapnil Jain inaugurated a completely hand-built, working racing car model designed and engineered by the brilliant minds of PIS.",
    category: "Achievements",
    date: "January 14, 2025",
    readTime: "6 min read",
    image: "https://imgh.in/host/f6nvcc",
  },
  {
    id: "post-16",
    title: "Where the sky is not the limit",
    excerpt:
      "At Pavna International School, the secondary department is divided into three main areas. The lower secondary, the IGCSE, and the A-level areas So it’s a seven-year program. In lower secondary, we have eleven subjects, and we take a holistic, child-centred approach to teaching and learning in that area. After which we run the two-year IGCSE programme and then the two-year A-level program. And these seven subjects comprise the International Certificate of Education, which is a well-respected qualification by universities all over the world, as well as by universities in India. Knowledge is power. You cannot pray to become a doctor, a translator, or a teacher. You need to go to school for that. Not just any school, but one that will make your dream a reality. And that’s exactly what we, the specialists at Pavna International School, have been doing.\n\n",
    category: "Campus Life",
    date: "December 20, 2024",
    readTime: "5 min read",
    image: "https://imgh.in/host/13ki0i",
  },
  {
    id: "post-17",
    title: "Where care comes first",
    excerpt:
      "From specialized health checkpoints to customized nutritional menus and round-the-clock wardens, student health and safety are our utmost priorities.",
    category: "Campus Life",
    date: "November 18, 2024",
    readTime: "4 min read",
    image: "https://imgh.in/host/qnhspi",
  },
  {
    id: "post-18",
    title: "An open playing field",
    excerpt:
      "Exploring our diverse physical education options, standard sports courts, and dedicated arenas designed to build sportsmanship, grit, and physical fitness.",
    category: "Campus Life",
    date: "October 29, 2024",
    readTime: "5 min read",
    image: "https://imgh.in/host/b40vir",
  },
  {
    id: "post-19",
    title: "Facilities galore",
    excerpt:
      "Nurturing modern creative explorations through premium music blocks, multimedia auditoriums, interactive laboratories, and air-conditioned hostels.",
    category: "Campus Life",
    date: "October 12, 2024",
    readTime: "5 min read",
    image: "https://imgh.in/host/8hib35",
  },
  {
    id: "post-20",
    title: "Pavna International School: Our curriculum",
    excerpt:
      "Our internationally integrated Cambridge curriculum emphasizes logic-driven conceptual learning over rote memorization, equipping students for top-tier achievements.",
    category: "Academics",
    date: "September 25, 2024",
    readTime: "5 min read",
    image: "https://imgh.in/host/3qf1d9",
  },
  {
    id: "post-21",
    title: "Think believe achieve just B+",
    excerpt:
      "Are you looking for the perfect school to nurture your child’s potential? At Pavna International School, we believe every child can achieve greatness with the proper guidance. Our unique Think Believe Achieve program helps children unlock their inner potential and develop into confident learners. Learn more about our educational philosophy and discover how our students excel academically and beyond!.",
    category: "Achievements",
    date: "September 10, 2024",
    readTime: "5 min read",
    image: "https://imgh.in/host/1rnqff",
  },
];

export const getSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export const getPostContent = (post: BlogPost): string => {
  if (post.id === "post-1") {
    return "The prestigious investiture ceremony of Pavna International School took place on August 28, graced by Chairman Mr. Swapnil Jain, Vice Chairperson Ms. Priya Jain, and esteemed guests, comprising Principals Ms. Aarti Jha from DPS Aligarh and Ms. Rajni Singh from DPS Civil Lines. The event commenced with a captivating performance by the school’s talented student band, setting the tone for the celebration of leadership. The new student council members stepped onto the stage for the oath-taking ceremony, wholeheartedly pledging their dedication to upholding the school’s core values. In his address, Chairman Mr. Swapnil Jain encouraged students to embrace life’s every facet with enthusiasm, while Principal Ms. Aarti Nigam highlighted the responsibilities that come with leadership. The Director of Academics, Mr. Stephen Sibthorpe, extended congratulations, marking the beginning of their journey as school value ambassadors. The event’s atmosphere was filled with a sense of unity and aspiration, as the students Council members pledged to nurture a positive school environment. It reminded students that leadership involves collaborative goal achievement with integrity and dedication, emphasizing the essence of accountability and leadership.";
  }
  if (post.id === "post-3") {
    return (
      "In today’s rapidly changing world, it is essential for students to develop a global mindset that allows them to navigate the complexities of an interconnected world. Pavna International School, Aligarh, prepares students for the future by fostering a global mindset through a world-class Cambridge International Curriculum, cross-cultural experiences, and real-world skill development. In this blog, we will explore how these elements come together to create well-rounded, globally aware individuals.\n\n" +
      "Cambridge International Curriculum: A Strong Academic Foundation\n\n" +
      "Pavna International School, Aligarh, follows the prestigious Cambridge International Curriculum, which is renowned for its rigorous academic standards and international focus. This curriculum provides students with a strong foundation in core subjects while also emphasizing critical thinking, problem-solving, and independent learning. By adopting a globally recognized curriculum, Pavna International School ensures that students receive an education that prepares them for success in higher education and future careers, both locally and internationally.\n\n" +
      "Cross-Cultural Experiences: Embracing Diversity and Inclusion\n\n" +
      "Fostering a global mindset also requires exposing students to diverse cultures, perspectives, and experiences. Pavna International School, Aligarh, offers a variety of cross-cultural opportunities, including student exchange programs, international trips, and collaborations with schools from other countries. These experiences help students develop empathy, respect for diversity, and an appreciation for the interconnectedness of our world.\n\n" +
      "Real-World Skills Development: Preparing for the Challenges of the 21st Century\n\n" +
      "To truly prepare students for the future, it is crucial to equip them with the skills they will need to succeed in an increasingly competitive and dynamic global landscape. Pavna International School, Aligarh, emphasizes the development of real-world skills such as communication, collaboration, creativity, and digital literacy. Through hands-on, project-based learning, students are encouraged to apply their knowledge to practical situations, fostering adaptability and innovation.\n\n" +
      "Community and Global Citizenship: Making a Positive Impact\n\n" +
      "Pavna International School, Aligarh, also cultivates a strong sense of community and global citizenship among its students. Through community service initiatives and social responsibility projects, students learn to take responsibility for their actions and make a positive impact on the world around them. This focus on ethical and responsible behavior helps to develop well-rounded individuals who are not only academically successful but also compassionate global citizens.\n\n" +
      "In conclusion, Pavna International School, Aligarh, prepares students for the future by fostering a global mindset through a world-class Cambridge International Curriculum, cross-cultural experiences, and real-world skill development. By nurturing well-rounded, globally aware individuals, the school ensures that its students are equipped to succeed in an increasingly interconnected and dynamic world. As a result, graduates of Pavna International School, Aligarh, are poised to become the leaders, innovators, and changemakers of tomorrow."
    );
  }
  if (post.id === "post-5") {
    return (
      "At Pavna International School, Aligarh, the commitment to academic excellence and holistic development has led to numerous student achievements, both inside and outside the classroom. We will celebrate some of the remarkable success stories of students from this prestigious institution, showcasing the impact of a well-rounded education.\n\n" +
      "Academic Achievements: Excelling in the Cambridge International Curriculum \n\n" +
      "Pavna International School, Aligarh, follows the Cambridge International Curriculum, which is known for its rigorous academic standards and focus on critical thinking and problem-solving. Students at the school have consistently excelled in their studies, with many achieving top scores in their Cambridge International Examinations. These academic accomplishments have opened doors to prestigious universities and scholarships, paving the way for bright futures. \n\n" +
      "Sports Success: Building Teamwork and Resilience \n\n" +
      "The emphasis on sports and physical education at Pavna International School, Aligarh, has led to numerous student achievements in various athletic disciplines. From regional and national competitions to international events, students have showcased their talents and dedication, bringing pride and recognition to their school. These athletic accomplishments not only highlight the students’ physical abilities but also demonstrate their teamwork, resilience, and determination. \n\n" +
      "Arts and Creativity: Nurturing Talent and Passion \n\n" +
      "Pavna International School, Aligarh, also encourages students to explore their creative talents and passions through the arts, music, and drama. Students have participated in and won awards at various art competitions, music festivals, and theater events, showcasing their creativity and artistic skills. These achievements highlight the school’s commitment to nurturing well-rounded individuals who excel not only academically but also in their creative pursuits. \n\n" +
      "Community Service and Leadership: Making a Difference \n\n" +
      "At Pavna International School, Aligarh, students are encouraged to take on leadership roles and participate in community service initiatives, helping them develop empathy, responsibility, and a strong sense of global citizenship. Students have organized and participated in various community service projects, such as environmental campaigns, fundraisers for charitable organizations, and educational outreach programs. These efforts demonstrate the students’ commitment to making a positive impact on their community and the world at large.\n\n" +
      "Awards and Recognition: Celebrating Diverse Accomplishments  \n\n" +
      "The diverse range of student achievements at Pavna International School, Aligarh, has led to numerous awards and recognitions, both at the regional and national levels. These accolades celebrate the students’ hard work, dedication, and passion and serve as a testament to the school’s commitment to providing a comprehensive education that fosters exceptional accomplishments. \n\n" +
      "In conclusion, the success stories of students at Pavna International School, Aligarh, demonstrate the powerful impact of a well-rounded education that combines academic excellence with holistic development. By celebrating these achievements, we hope to inspire future students to reach for their dreams and realize their full potential. There is no limit to what these students can accomplish in their personal and professional lives with the strong foundation Pavna International School provides. "
    );
  }
  if (post.id === "post-7") {
    return (
      "Schools in today’s fast-paced, technologically driven world must change and develop to keep up with students’ learning demands. The students and faculty at Pavna International School in Aligarh credit technology for significantly improving the quality of their education. In this piece, we’ll look at how Pavna International School incorporates technology into its lessons and how that’s helped its students. \n\n" +
      "Technology-Enhanced Learning Experiences \n\n" +
      "At Pavna International School, Aligarh, technology is seamlessly integrated into the classroom, providing students with engaging and interactive learning experiences. From digital resources and online tools to multimedia presentations and virtual labs, students have access to a wealth of innovative educational materials that cater to different learning styles and preferences. This technology-enhanced approach promotes deeper understanding, encourages critical thinking, and helps students stay motivated and engaged in their learning. \n\n" +
      "Fostering Collaboration and Communication  \n\n" +
      "Technology also plays a crucial role in fostering collaboration and communication among students and teachers at Pavna International School, Aligarh. Online platforms and tools facilitate group projects, classroom discussions, and peer feedback, enabling students to work together effectively and develop essential teamwork skills. Additionally, these platforms provide teachers with new ways to communicate with students, share resources, and monitor progress, ensuring that every student receives the support and guidance they need to succeed. \n\n" +
      "Promoting personalized learning and growth \n\n" +
      "Technology also enables Pavna International School, Aligarh, to offer personalized learning experiences tailored to the unique needs, interests, and abilities of each student. Through adaptive learning platforms and data-driven assessments, teachers can monitor individual progress and provide customized support and resources to help students overcome challenges and reach their full potential. This personalized approach to learning ensures that every student at Pavna International School receives the guidance and encouragement they need to succeed.  \n\n" +
      "Preparing Students for the Future  \n\n" +
      "By embracing technology and integrating it into every aspect of the educational experience, Pavna International School, Aligarh, is preparing students for the digital age and the challenges and opportunities it presents. Graduates of Pavna International School will be well-equipped to navigate an increasingly complex and interconnected world with the digital skills, critical thinking abilities, and adaptability needed to excel in their personal and professional lives.  \n\n" +
      "Finally, the Pavna International School in Aligarh is redefining education by utilizing technology to improve learning occasions, promote collaboration, and get students ready for the digital world. By selecting Pavna International School, parents can be sure that their kids will receive a future-ready education that will provide them the abilities and information needed to prosper in a constantly changing world.  "
    );
  }
  if (post.id === "post-8") {
    return (
      "Holistic learning is an educational approach that focuses on the development of the whole person, encompassing academic, social, emotional, and physical growth. At Pavna International School, Aligarh, a Cambridge International School Affiliate, students can embrace this holistic learning philosophy to become well-rounded individuals prepared for the challenges and opportunities of the 21st century. In this article, we will explore the key aspects of holistic learning at Pavna International School, Aligarh.  \n\n" +
      "Academic Excellence through the Cambridge International Curriculum  \n\n" +
      "Pavna International School, Aligarh, follows the prestigious Cambridge International Curriculum, which provides a strong academic foundation and fosters the development of critical thinking, problem-solving, and independent learning skills. By adopting this world-class curriculum, Pavna International School ensures that students receive a rigorous and comprehensive education that prepares them for success in their higher education and future careers. \n\n" +
      "Nurturing emotional intelligence and social skills   \n\n" +
      "Holistic learning goes beyond academics to include the development of emotional intelligence and social skills. At Pavna International School, Aligarh, teachers and staff are dedicated to fostering a supportive and inclusive environment that encourages empathy, respect, and effective communication. Through collaborative projects, group activities, and classroom discussions, students learn to work with others, manage their emotions, and navigate complex social situations.  \n\n" +
      "Fostering good physical condition  \n\n" +
      "Taking care of one’s body is crucial to a well-rounded education. Sports, physical education, and extracurricular activities at Pavna International School, Aligarh, are available for pupils of many ages, backgrounds, and skill levels. Along with encouraging a healthy and active lifestyle, these activities help students build physical fitness, teamwork skills, and resilience. \n\n" +
      "Fostering Originality and Creativity   \n\n" +
      "The Aligarh, India-based Pavna International School understands the necessity of encouraging original thought among today’s students. Students are given numerous options to pursue their interests and hone their creative skills through the arts, music, and technology. Students are inspired to think creatively and analytically by participating in hands-on, project-based learning activities. \n\n" +
      "Developing global citizens and ethical leaders    \n\n" +
      "As a Cambridge International School Affiliate, Pavna International School, Aligarh, is committed to nurturing global citizens who are equipped to make a positive impact on the world. Through the integration of international content, cross-cultural experiences, and community service initiatives, students learn to appreciate diversity, take responsibility for their actions, and act as ethical leaders in their local and global communities. " +
      "In conclusion, Pavna International School in Aligarh provides a well-rounded education that emphasizes not only academic success but also the cultivation of students’ emotional intelligence, social skills, physical well-being, imagination, and global citizenship. Students at Pavna International School are equipped to thrive in a globally interdependent and rapidly evolving world thanks to the school’s commitment to an interdisciplinary curriculum."
    );
  }
  if (post.id === "post-9") {
    return (
      "It is crucial for schools in today’s quickly developing world to provide pupils with the knowledge and abilities they’ll need to succeed in both their personal and professional endeavors. Unlike other schools, Pavna International School in Aligarh places a premium on providing each student with individualized instruction, a well-rounded education, and marketable skills. In this piece, we’ll look at what makes Pavna International School’s approach unique, and how it helps students prepare for successful futures. \n\n" +
      "Personalized learning for individual growth \n\n" +
      "At Pavna International School, Aligarh, personalized learning is a cornerstone of the educational philosophy. Teachers recognize that each student has unique strengths, interests, and learning styles. As a result, they tailor their teaching methods and strategies to meet the individual needs of every child. This personalized approach helps to ensure that all students are engaged, challenged, and supported in their learning journey, ultimately leading to improved academic outcomes and personal growth.\n\n" +
      "Holistic Development for Well-Rounded Individuals    \n\n" +
      "Pavna International School, Aligarh, is committed to nurturing well-rounded individuals who are prepared to face the challenges of the modern world. The school’s curriculum and extracurricular activities are designed to promote holistic development, encompassing intellectual, physical, social, and emotional growth. From sports and the arts to community service and leadership opportunities, students at Pavna International School are encouraged to explore their passions and develop essential life skills that extend beyond the classroom.  \n\n" +
      "Focus on real-world skills and problem-solving   \n\n" +
      "In addition to providing a strong academic foundation, Pavna International School, Aligarh, emphasizes the importance of developing real-world skills and problem-solving abilities. Students are encouraged to apply their knowledge and skills to practical situations, fostering critical thinking, creativity, and innovation. This hands-on, experiential approach to learning helps prepare students for success in their future careers and endeavors.  \n\n" +
      "A Supportive and Inclusive Learning Environment    \n\n" +
      "Pavna International School, Aligarh, is dedicated to creating a supportive and inclusive learning environment where students feel valued, respected, and inspired to reach their full potential. The school fosters a strong sense of community and belonging, ensuring that students develop positive relationships with their peers and teachers. This nurturing atmosphere plays a crucial role in empowering students to overcome challenges and achieve success. \n\n" +
      "Future-Ready Education \n\n" +
      "By combining personalized learning, holistic development, a focus on real-world skills, and a supportive environment, Pavna International School, Aligarh, provides a future-ready education that empowers students to succeed in an increasingly competitive and dynamic world. Graduates of Pavna International School are not only academically proficient but also possess the confidence, resilience, and adaptability needed to thrive in their personal and professional lives." +
      "In conclusion, Pavna International School, Aligarh, takes a unique approach to empowering students for success by prioritizing personalized learning, holistic development, and real-world skills within a supportive and inclusive environment. By choosing Pavna International School, parents can be confident that their children will receive an education that prepares them for a bright and successful future"
    );
  }
  if (post.id === "post-10") {
    return (
      "It’s more crucial than ever to provide our kids with the skills they’ll need to take on the problems and seize the possibilities of tomorrow’s world. The mission of Pavna International School, Aligarh, is to educate the next generation of global leaders by providing them with the rigorous and enriching Cambridge International School curriculum. In this article, we’ll look at how the Cambridge curriculum is implemented at Pavna International School in Aligarh, India, and how it aids in shaping students into well-rounded, self-assured, and internationally competent citizens. \n\n" +
      "Academic Excellence and Rigorous Curriculum \n\n" +
      "The Cambridge International School curriculum is renowned for its academic rigor and focus on developing key skills such as critical thinking, problem-solving, and independent learning. By implementing this internationally recognized curriculum, Pavna International School, Aligarh, ensures that students receive a solid academic foundation and are well-prepared to succeed in their higher education and future careers. \n\n" +
      "Developing Critical Thinking Skills \n\n" +
      "Critical thinking is an essential skill that allows students to analyze complex issues, evaluate evidence, and make informed decisions. The Cambridge curriculum at Pavna International School, Aligarh, places a strong emphasis on developing these critical thinking skills through inquiry-based learning, classroom discussions, and project work. This approach enables students to become confident, independent thinkers who are capable of tackling real-world problems.\n\n" +
      "Cultivating Global Awareness and Cultural Sensitivity  \n\n" +
      "In an increasingly interconnected world, it is vital for students to develop a deep understanding of different cultures, perspectives, and global issues. The Cambridge International School curriculum at Pavna International School, Aligarh, fosters this global awareness by incorporating international content and promoting cross-cultural understanding. Through this approach, students learn to appreciate diversity, respect different viewpoints, and develop the skills needed to navigate a multicultural world. \n\n" +
      "Encouraging Active Citizenship and Social Responsibility \n\n" +
      "Pavna International School, Aligarh, believes in nurturing well-rounded individuals who are not only academically proficient but also socially responsible and compassionate. The Cambridge curriculum encourages active citizenship and social responsibility by integrating community service and environmental sustainability initiatives into the learning experience. By participating in these activities, students develop empathy, leadership skills, and a sense of responsibility towards their community and the world at large. \n\n" +
      "Preparing Students for the Future  \n\n" +
      "The Cambridge International School curriculum equips students with the knowledge, skills, and attitudes needed to excel in a rapidly changing global landscape. By providing a comprehensive and forward-looking education, Pavna International School, Aligarh, prepares its students to adapt and thrive in an increasingly competitive and interconnected world. " +
      "In conclusion, Pavna International School, Aligarh, is dedicated to shaping global leaders by offering a world-class Cambridge International School curriculum that fosters academic excellence, critical thinking, and global awareness. By choosing Pavna International School, parents can ensure that their children receive an education that empowers them to become confident, responsible, and successful individuals who are ready to make a positive impact on the world. "
    );
  }
  if (post.id === "post-11") {
    return (
      "Choosing the right education for your child is a crucial decision that can significantly impact their future. Pavna International School, Aligarh, provides students with the opportunity to pursue a Cambridge International Education, offering a world-class curriculum that nurtures academic excellence, global perspectives, and holistic development. In this article, we will delve into the benefits of a Cambridge International Education at Pavna International School, Aligarh. \n\n" +
      "Academic Excellence and Rigor  \n\n" +
      "The Cambridge International Education curriculum is renowned for its academic rigor and focus on developing critical thinking, problem-solving, and independent learning skills. By following this internationally recognized curriculum, Pavna International School, Aligarh, ensures that its students are well-prepared to excel in their studies and future endeavors. \n\n" +
      "Global Perspectives and International Recognition  \n\n" +
      "Cambridge International Education is designed with a global outlook, exposing students to diverse cultures, perspectives, and ideas. This global perspective helps students at Pavna International School, Aligarh, develop a broader understanding of the world and fosters adaptability and open-mindedness. Additionally, the Cambridge curriculum is well-respected and accepted by universities and employers all over the world, giving students a strong foundation for their higher education and career aspirations. \n\n" +
      "Holistic Development and Extracurricular Opportunities  \n\n" +
      "Pavna International School, Aligarh, understands the importance of a well-rounded education, which is why it offers a wide range of extracurricular activities in addition to the Cambridge curriculum. These activities, including sports, music, the arts, and community service, enable students to explore their passions and develop essential life skills such as teamwork, leadership, and resilience.\n\n" +
      "Personalized learning and support  \n\n" +
      "At Pavna International School in Aligarh, teachers are dedicated to providing personalized support and guidance to each student. The Cambridge curriculum’s flexible nature allows teachers to tailor their teaching methods and approaches to the unique needs and learning styles of individual students, ensuring that every child receives the attention and support they need to thrive. \n\n" +
      "Innovative teaching and state-of-the-art facilities  \n\n" +
      "Pavna International School, Aligarh, boasts state-of-the-art facilities and employs innovative teaching methods to create an engaging and dynamic learning environment. The school’s modern classrooms, well-equipped laboratories, and extensive library resources support the Cambridge curriculum’s emphasis on inquiry-based learning and hands-on experiences. " +
      "A Safe Place That Welcomes Everyone   \n\n" +
      "Aligarh’s Pavna International School strives to provide a welcoming and accepting community where all kids are respected and cared for. Students learn compassion, respect, and tolerance in an environment where they feel safe and accepted.  " +
      "Academic achievement, international awareness, whole-person growth, individualized instruction, and a caring community are just a few of the many advantages children gain from a Cambridge International Education at Pavna International School in Aligarh. Parents may rest assured that their children will be well-prepared for the challenges of today’s globalized, competitive world thanks to the Cambridge curriculum offered at Pavna International School. "
    );
  }
  if (post.id === "post-12") {
    return (
      "A comprehensive education that equips students for the challenges of the global stage is essential in today’s fast-paced and interconnected society. Just that is being carried out by Pavna International School, an affiliate of Cambridge International School. Pavna International School, a favorite choice for both parents and students, has earned a reputation for academic brilliance by providing a thorough and well-rounded curriculum. \n\n" +
      "Global Outlook and a World-Class Curriculum   \n\n" +
      "As a Cambridge International School Affiliate, Pavna International School, Aligarh, follows the globally recognized Cambridge curriculum. This curriculum is designed to encourage critical thinking, problem-solving, and independent learning, equipping students with the necessary skills to excel in the 21st century. Furthermore, the curriculum’s international perspective helps students develop a global outlook, fostering a deeper understanding of different cultures and perspectives. \n\n" +
      "Holistic Education and Extracurricular Activities   \n\n" +
      "At Pavna International School, Aligarh, the focus is not only on academics but also on nurturing the overall development of every student. The school offers a wide range of extracurricular activities, including sports, music, dance, art, and more, ensuring that students have ample opportunities to explore their passions and develop essential life skills.\n\n" +
      "Dedicated faculty and personalized learning   \n\n" +
      "The dedicated and experienced faculty at Pavna International School, Aligarh, play a pivotal role in shaping the students’ learning experience. Teachers employ innovative teaching methods and personalized learning approaches, catering to the unique needs of each student. This customized learning environment allows students to grow and excel at their own pace. \n\n" +
      "State-of-the-Art Infrastructure   \n\n" +
      "Pavna International School, Aligarh, boasts state-of-the-art infrastructure and facilities to create an optimal learning environment. The campus is equipped with spacious classrooms, well-stocked libraries, modern science and computer labs, and sports facilities, all designed to support the students’ academic and extracurricular pursuits. \n\n" +
      "A Community of Lifelong Learners   \n\n" +
      "The school’s commitment to nurturing a community of lifelong learners is evident in the strong emphasis placed on character building and values education. Pavna International School, Aligarh, instills in its students the values of empathy, integrity, and resilience, cultivating responsible global citizens prepared to make a positive impact on the world. " +
      "In conclusion, Pavna International School, Aligarh, a Cambridge International School Affiliate, is unlocking excellence by providing students with a well-rounded, globally relevant education that fosters personal and academic growth. With its dedicated faculty, state-of-the-art facilities, and strong focus on holistic education, Pavna International School is truly shaping the leaders of tomorrow.  "
    );
  }
  if (post.id === "post-13") {
    return (
      "A book written by a six-year-old student named Daksh Shetty of Pavna International School. The book is titled “The Battle Against the Evil Sheep”. This book is an amazing story of a brave shepherd boy who rises to the occasion to save his flock of sheep from an evil sheep. The story begins when the shepherd boy notices an evil sheep in his flock. He quickly realises that this evil sheep is determined to take over the flock and make them do his bidding. The shepherd boy then rallies the other sheep to fight against the evil one. He uses his brave and cunning nature to outwit the evil sheep. In the end, the shepherd boy and his flock manage to defeat the evil sheep and reclaim their freedom. The book is a great read for children of all ages. It is filled with adventure and excitement, and it teaches valuable lessons about courage and standing up for what you believe in. It also demonstrates the power of unity and the importance of friendship. Daksh Shetty’s book is an inspiring story that is sure to capture the imagination of its readers. It is an excellent example of how even the youngest of children can be creative and productive." +
      "About the Author of the Book “The Battle Against the Evil Sheep” \n\n" +
      "Daksh Shetty is a dynamic individual with a range of personality traits that make him stand out. He is talkative and confident. Driven by a thirst for knowledge, Daksh is constantly seeking to expand his understanding of the world and to know every piece of knowledge available. Despite his talkative nature, Daksh is also an ambivert. He is capable of navigating both introverted and extroverted tendencies, making him well-rounded and adaptable. With his unique blend of confidence, knowledge-seeking, and versatility, Daksh’s writing is sure to be insightful and engaging. "
    );
  }
  if (post.id === "post-14") {
    return (
      "Pavna International School collaborated with Wao Podium to organise the Launch Pad Event, which featured the launch of many exciting projects—a book launch, a webpage launch, a vlog premiere, and the school’s own Go-Kart racing car. The event brought together the school community, including students, parents, and faculty members, to celebrate the achievements and talents of the students and explore new opportunities for learning. Students had a great chance to show off their skills and talents at the Wao Podium Event. The guests at the book launch received a book that the students had written and illustrated, and they were all very excited about it. The highlight of the event was the unveiling of the school’s wao podium book launch. The students had worked hard to write the book. “The Battle Against the Evil Sheep” Book Written by DAKSHA SHETTY student at Pavna International School, Aligarh.\n\n" +
      "Show Off Talent, Creativity, and Dedication at Press Conference   \n\n" +
      "During the press conference for the Book Launch, the young students who were involved in creating these projects confidently answered questions from the press, impressing them with their creativity and commitment. Overall, the books written by these little authors were a true testament to their talent, creativity, and dedication to their craft. The students who were involved in the book project spoke confidently and proudly about their work, and the press was thoroughly impressed with their creativity. The books were written by the students themselves, and each one was a unique testament to their talent and passion.\n\n" +
      "The press was deeply impressed by the dedication and enthusiasm that the students had put into the projects. They also praised the school for its commitment to fostering creativity and innovation in its students.The Launch Pad event was a great way for the students to show off their skills and for the community to come together and celebrate their achievements. The event was a huge success, and everyone had a great time. The students were proud to showcase their work and were excited to explore new opportunities for learning.This event was a great opportunity for the school community to come together and celebrate the talents of the students. It was also a great opportunity for the students to explore new opportunities and gain valuable experience. The event was a huge success and the school is proud of the students and their hard work." +
      "Want to Enroll or Enquire about Admissions or Fees? Share your details and our team will connect with you soon."
    );
  }
  if (post.id === "post-15") {
    return (
      "Pavna International School collaborated with Wao Podium to organise the Launch Pad Event, which featured the launch of many exciting projects—a book launch, a webpage launch, a vlog premiere, and the school’s own Go-Kart racing car. The event brought together the school community, including students, parents, and faculty members, to celebrate the achievements and talents of the students and explore new opportunities for learning. The highlight of the event was the unveiling of the school’s go-kart racing car. The students had worked hard to build the car from scratch, and their hard work paid off. The car was a huge hit with the attendees, and the students were praised for their efforts.\n\n" +
      "Press Conference for the Go Kart  \n\n" +
      "During the press conference for the Go kart, the young students who were involved in creating these projects confidently answered questions from the press, impressing them with their creativity and commitment. Overall, a group of students who had been working on the Go-Kart project for months presented it to the press. This project was an impressive example of the students’ skills, as they had designed and built the Go Kart from scratch.\n\n" +
      "Chairman of School Unveils Incredible GO Kart  \n\n" +
      "Mr. Swapnil Jain, Chairman of Pavna International School, had the honor of unveiling the go-kart for the students and parents of the school. The students and parents were equally thrilled and enthusiastic to witness this incredible machine.\n\n" +
      "At the end of the event, the chairman, Mr. Swapnil Jain, appreciated the students for their hard work and effort. The event was a great success, and the students were able to gain a great deal of knowledge and experience in the process of building the racing car. With the support of the PIS team, the students will be able to create and design a racing car. The PIS team is proud to have been a part of this amazing event and looks forward to working with the students to help them achieve their dreams. The success of this event has shown that with the right guidance and support, students can build and design racing car, and experience the thrill of racing." +
      "Want to Enroll or Enquire about Admissions or Fees? Share your details and our team will connect with you soon.."
    );
  }
  if (post.id === "post-16") {
    return (
      "At Pavna International School, the secondary department is divided into three main areas. The lower secondary, the IGCSE, and the A-level areas So it’s a seven-year program. In lower secondary, we have eleven subjects, and we take a holistic, child-centred approach to teaching and learning in that area. After which we run the two-year IGCSE programme and then the two-year A-level program. And these seven subjects comprise the International Certificate of Education, which is a well-respected qualification by universities all over the world, as well as by universities in India. Knowledge is power. You cannot pray to become a doctor, a translator, or a teacher. You need to go to school for that. Not just any school, but one that will make your dream a reality. And that’s exactly what we, the specialists at Pavna International School, have been doing.\n\n" +
      "There was a lot of research that went into designing the school. So right from the entrance, you can see that the building is inspired by Lumen architecture. And once you move in, you see there is a blend of Indian and Western culture here. So this is what we are trying to communicate through our designs. It’s a blend of Western education with Indian values and culture here. So it’s a talking school. If you look at the walls here, each and every wall has something to give to the child. So when the child enters, say, the experiential block, which is the labs, you will find that each and every lab has certain wallpapers or information that is displayed on the wall and that tells the story of the contributions that have been made by the scientists.\n\n" +
      "In this field, we have other special rooms like art rooms and math labs. These are done in a very creative way so that the child feels at ease. When we talk about Pavna International, we’re talking about opulence, comfort, knowledge, and experiences. And, because it is a charter school, it emphasises safety and security. In terms of safety and security, we’ve used all those surfaces that are antibacterial and antiviral here. So your child is absolutely safe and secure in this environment. So a lot of brainstorming and a lot of research have gone into designing this." +
      "At Pavna International School, our teaching methodology. Is based on experiential learning. Our focus is to cultivate observational, technical communication and time management skills in our students. Experiential learning helps students observe every facet. Both from the academic and pragmatic point of view. Right from the very early age, we Empower our students to ask questions, to research, to explore and find answers, making them independent thinkers. This collaborative learning methodology creates a sense of oneness amongst the students. At PIS, we believe in the holistic development of students. Along with a scheduled academic calendar, we also have a dedicated time for extracurricular activities. Children have given a choice of activities. Ranging from horse riding to robotics, from Industrial design to textile design. Then they go for their swimming classes, theater, dancing, painting and many more to choose from. Our homework policies give students additional time to bond with their family and friends and nurture a new hobby. Be yourself is the motto of Pavna International School. Each student is unique. And they have their own set of talents and skills. And we at Pavna International School believe in our students." +
      "The school is about experiential learning. The school focuses on walking and learning. You roam around here, walking down any corridor. This is a completely different idea. The infrastructure of the school is really fascinating, especially how the science labs are designed. All the subjects as well as the concepts are taught thoroughly using smart panels." +
      "Pavna International School prides itself on offering one of the Cambridge flagship subjects, global perspectives. This enables our students to think outside the box and learn about issues all around the world. And it aligns very well with our school’s mission, namely to nurture our students into global citizens. The idea behind creating this industrial lab was that we needed a space within the campus that was very industry-centric, where we could teach the kids about metal, how to work with metal, how to work with wood, and just to give it that industry-centric appeal. As you can see, everything here is raw. And the names given to the classroom and the workshops are also industry-centric. For example, this particular space is called the Innovation Center. That is our maker space. And this is what research and development is all about.  At Pavna International School, the safety and comfort of the students are very important to us. If we talk about the transportation system, the buses that are applying are equipped with the GPS tracking system. As a result, the parents have excellent tracking abilities. The buses are tracked live, so they do not have to wait at the bus stops for hours just for their students to get down." +
      "Our school’s PIS is totally enabled. With the Internet of Things, which is based on artificial intelligence, we are keeping track of student activities inside and outside of schools. In terms of these security measures at the campus, the entire campus is under the surveillance of more than 250 cameras, which are all well connected to a video wall at the main gate and are under the constant surveillance of two guards, 24×7. The security guards are well equipped with the latest technologies, for instance, in communications. So, yes, students’ safety is taken care of not only in the infrastructure but also around the corner. We are controlling the lights and the air conditioners according to the presence of the students inside the classes, and we are also maintaining the TDS level and the pH value of the drinking water to maintain hygiene. Apart from it, we are also maintaining the AQI and the CO2 level of the fresh air, which helps them in maintaining the clean environment." +
      "Pavna International School offers world-class facilities for indoor and outdoor sports, to name a few. The school has a basketball court for indoor badminton, a multi-purpose hall, an all-weather swimming pool, and a tennis court. In addition to this, there is a volleyball court, a table tennis facility, a billiards facility for combat games, a horse riding facility, and many more. The infrastructure is well supported by the sports staff. Each game is overseen by highly qualified and experienced trainers and physical education teachers. "
    );
  }
  if (post.id === "post-17") {
    return (
      "Are you looking for the perfect school for your child? Pavna International School is here to help! Our top priority is providing a safe, nurturing environment where children can learn and grow. With our experienced faculty and staff, we offer an excellent education along with a holistic approach to learning. Discover how Pavna International School puts your child’s safety and needs first!" +
      "The safety and comfort of the students are very important to us. If I talk about the transportation system, the buses that are applying are equipped with the GPS tracking system. As a result, the parents have excellent tracking abilities. The live tracking of the buses so they do not have to wait at the bus stops for hours just for their students to get down.  Our School PIS is totally enabled with the Internet of Things that is I.O.T. Based on artificial intelligence, we are keeping track of student activities inside and outside the schools." +
      "In terms of these security measures at the campus, the entire campus is under the surveillance of around more than 250 cameras, which are all well connected to a video wall at the main gate and are under the constant surveillance of two guards, 24×7. The security guards are well equipped with the latest technologies, for instance, communications. So, yes, students’ safety is taken care of not only in the infrastructure but also around the corner." +
      "We are controlling the lights and the air conditioners according to the presence of the students inside the classes, and we are also maintaining the TDS level and the pH value of the drinking water to maintain hygiene. Apart from it, we are also maintaining the AQI and the CO2(Carbon Dioxide) level of the fresh air, which helps them in maintaining a clean environment."
    );
  }
  if (post.id === "post-18") {
    return (
      "Welcome to Pavna International School! We are here to provide an open playing field for Pavna International School Aligarh students. Our school is committed to offering the most comprehensive and diverse sports and activities for all students. We offer a wide range of sports such as basketball, football, and volleyball, as well as individual sports like tennis, swimming, and track and field. We also offer a variety of activities and clubs such as drama, chess, and robotics, which foster creativity and collaboration. " +
      "Pavna international school offers world class facilities for indoor and outdoor sports to state a few. The school has a basketball court for indoor badminton court, a multi-purpose hall and all-weather swimming pool and tennis court. In addition to this, there is a volleyball court table tennis billiard facility for combat games horse riding and many more. The infrastructure is well supported by the sports staff. Every game is caused by the well-qualified and experienced trainers and physical education teachers. " +
      "The school has dedicated courts for Basketball, Badminton, and Tennis, a multi-purpose hall, and an all-weather swimming pool. The school also offers a fully-equipped gymnasium with modern equipment and a wide range of fitness classes. In addition to these, the school also provides facilities for badminton, table tennis, squash, and other sports. For outdoor sports, the school has a large playground for football, cricket, and hockey. The school also has its own sports complex, which includes a jogging track, a basketball court, and a volleyball court. The school encourages students to participate in sports activities and provides them with the opportunity to hone their skills and talent. Through these facilities, the school ensures that its students get the best sports experience possible. "
    );
  }
  if (post.id === "post-19") {
    return (
      "Are you looking for a school that provides your child with the best facilities? Look no further! Pavna International School Aligarh offers world-class infrastructure and amenities like spacious classrooms, a library, science labs, a swimming pool, a basketball court, and more. Watch this video to get an exclusive tour of our campus so you can make an informed decision for your child’s future." +
      "Facilities at PIS \n\n" +
      "Musical Fountain ,Conference Room ,Kids Room ,Dispensary ,Auditorium ,Teachers’ Lounge ,Library ,Sensor Based Drinking Water ,Unique Design of Washrooms ,Exhibition Area"
    );
  }
  if (post.id === "post-20") {
    return "We believe that the biggest academic achievement is one’s development as a whole individual. Beyond the advantages that naturally come from the Cambridge Curriculum, a student benefits from the world of experience by combining theoretical and practical approaches. In other words, it is all about life itself, teaching you to look at life with a new perspective. Cambridge Assessment We strictly follow the Cambridge International Curriculum to maintain a world-class standard of education that is recognised by highly rated universities the world over. Unlike traditional learning where students are restricted to study a certain combination of subjects only, we provide them the flexibility to pick their own subjects and pursue their passion freely. Pavna School-cambridge-logo We take great pride in breaking the educational stereotypes to help students come out of the rote learning culture. Instead, we help to instil in students a collaborative, reflective outlook towards life and problems in general. Our teaching methodologies encourage students to acquire both academic as well as interpersonal leadership skills that drive them to be what they want to be; be it an Inventor, Artist, Entrepreneur… they will be stalwarts of tomorrow.";
  }
  if (post.id === "post-21") {
    return "Are you looking for the perfect school to nurture your child’s potential? At Pavna International School, we believe every child can achieve greatness with the proper guidance. Our unique Think Believe Achieve program helps children unlock their inner potential and develop into confident learners. Learn more about our educational philosophy and discover how our students excel academically and beyond!pavna-experiential learning zoneThe infrastructure of the school is really fascinating, especially how the science labs are designed. All the subjects, as well as the concepts, are taught thoroughly using smart panels.  At Pavna International School, we are very fortunate to have a superb learning environment. We aim to solve problems rather than answer maths questions from a book. This means we use the entire campus and the multitude of resources here in order to achieve that aim. Pavna International school pride ourselves on offering one of the Cambridge flagship subjects Global Perspectives. This enables our students to think outside the box and learn about issues all around the world. And it aligns very well with our school mission, namely, to nurture our students to be global citizens.  The idea behind creating this industrial lab was we need a space within the campus that is very industry centric, where we can teach the kids about metal, how to work with metal, how to work with wood and just to give that industry centric appeals. As you can see, everything here is raw and the names given to the classroom and the workshops are also industry centric. For example, this particular space is called Innovation Centre, that is our maker space. And this is the research and development foreign. ";
  }

  return `${post.excerpt}

At Pavna International School, our educational vision reaches far beyond the boundaries of traditional classrooms. This event highlights our steadfast devotion to academic rigor, integrity, and building a secure environment that nurtures holistic growth.

Through collaboration, mentorship, and world-class educational tools, we empower our students to think critically and lead with empathy. We are proud of this milestone and look forward to fostering even greater accomplishments in the coming sessions.`;
};

const Blog: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const POSTS_PER_PAGE = 6;

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  // Filter posts based on category and search query
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  const categories = [
    "All",
    "Academics",
    "Events",
    "Campus Life",
    "Achievements",
  ];

  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-black font-gill selection:bg-brand-orange/20 selection:text-brand-navy">
      {/* 1. Page Header Section */}
      <section className="relative bg-brand-navy text-white overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="https://i.postimg.cc/MpZP2sXP/DSC08748-JPG.jpg"
            alt="PIS Blog Background"
            className="w-full h-full object-cover scale-105 filter blur-[2px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent" />
        </div>

        {/* Decorative Grid Patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-brand-gray mb-6">
            <span
              className="hover:text-brand-orange transition-colors cursor-pointer"
              onClick={() => (window.location.hash = "")}
            >
              Home
            </span>
            <span className="text-white/30">/</span>
            <span className="text-white/50">News & Media</span>
            <span className="text-white/30">/</span>
            <span className="text-brand-orange font-bold font-sans">Blog</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-[52px] lg:text-[52px] font-sans font-bold leading-tight md:leading-[58px] lg:leading-[58px] tracking-tight text-white mb-4">
              Our Blog
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light font-gill max-w-2xl">
              Explore dynamic classroom stories, academic milestones, and
              highlights of life at Pavna International School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Category Filter & Search Section */}
      <section className="py-5 border-y border-neutral-100 bg-white sticky top-[64px] md:top-[80px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Categories row */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <span className="text-neutral-400 font-bold text-[11px] tracking-wider uppercase shrink-0 mr-2 font-sans flex items-center gap-1">
              <Filter size={12} />
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-brand-orange text-white shadow-sm"
                    : "bg-[#FAF9F6] text-brand-navy hover:bg-[#FAF9F6]/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search stories..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-11 pr-5 py-2.5 bg-[#FAF9F6] border border-neutral-200 rounded-full text-sm font-medium text-brand-navy placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/10 transition-all"
            />
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
            />
          </div>
        </div>
      </section>

      {/* 4. Blog Posts Grid */}
      <section className="py-16 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-neutral-100">
              <BookOpen
                size={48}
                className="mx-auto text-neutral-300 mb-4 stroke-[1.25]"
              />
              <h3 className="text-xl font-serif font-bold text-brand-navy mb-2">
                No Articles Found
              </h3>
              <p className="text-neutral-500 text-sm max-w-sm mx-auto">
                We couldn't find any articles matching your search query or
                selected category. Try selecting another filter!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden border border-neutral-100/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Card Thumbnail */}
                  <div
                    onClick={() => {
                      window.location.hash = `#blog/${getSlug(post.title)}`;
                      window.scrollTo(0, 0);
                    }}
                    className="relative h-56 overflow-hidden bg-neutral-900 group cursor-pointer"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const categoryFallbacks: Record<string, string> = {
                          Academics:
                            "https://i.postimg.cc/W3nQr8nr/DSC06164-JPG.jpg",
                          Events:
                            "https://pavnaintlschool.com/wp-content/uploads/2023/09/Pavna-Investiture-Ceremony-2-1024x535.jpg",
                          "Campus Life":
                            "https://i.postimg.cc/Njqr9kPn/enviroment-jpg.jpg",
                          Achievements:
                            "https://i.postimg.cc/1zpxRsVB/DSC08709-JPG.jpg",
                        };
                        target.onerror = null;
                        target.src =
                          categoryFallbacks[post.category] ||
                          "https://i.postimg.cc/pXdscR2c/admin-block-1-jpg.jpg";
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-brand-navy text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full font-sans shadow-sm">
                      {post.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-[11px] font-semibold text-neutral-400 mb-3 font-sans">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                    </div>

                    <h4
                      onClick={() => {
                        window.location.hash = `#blog/${getSlug(post.title)}`;
                        window.scrollTo(0, 0);
                      }}
                      className="text-lg font-serif font-bold text-brand-navy mb-3 leading-snug line-clamp-2 hover:text-brand-orange transition-colors cursor-pointer"
                    >
                      {post.title}
                    </h4>

                    <p className="text-neutral-500 text-[13.5px] leading-relaxed line-clamp-3 mb-5 font-medium">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-4 border-t border-neutral-50">
                      <a
                        href={`#blog/${getSlug(post.title)}`}
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center gap-1.5 text-brand-orange hover:text-brand-dark-orange text-xs font-bold tracking-wider uppercase cursor-pointer group"
                      >
                        <span>Read Story</span>
                        <ArrowRight
                          size={12}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-6 mt-16 text-sm font-medium text-neutral-500 font-sans border-t border-neutral-100 pt-8">
              <button
                onClick={() => {
                  setCurrentPage((prev) => Math.max(1, prev - 1));
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                disabled={currentPage === 1}
                className={`transition-colors cursor-pointer text-xs uppercase tracking-wider font-bold ${
                  currentPage === 1
                    ? "opacity-30 cursor-not-allowed text-neutral-400"
                    : "text-brand-navy hover:text-brand-orange"
                }`}
              >
                « Previous
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 300, behavior: "smooth" });
                      }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer font-bold text-xs ${
                        currentPage === page
                          ? "bg-brand-orange text-white shadow-sm"
                          : "text-brand-navy hover:bg-neutral-100"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
              </div>

              <button
                onClick={() => {
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                disabled={currentPage === totalPages}
                className={`transition-colors cursor-pointer text-xs uppercase tracking-wider font-bold ${
                  currentPage === totalPages
                    ? "opacity-30 cursor-not-allowed text-neutral-400"
                    : "text-brand-navy hover:text-brand-orange"
                }`}
              >
                Next »
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
