export const isDaytime = () => {
  const hour = new Date().getHours();
  // return hour >= 7 && hour < 18;
  return true
};

export const quizData = (id, path) => {
  const quizzes = [
    {
      id: 1,
      title: "Alfabet Isyarat A-E",
      subtitle: "Mengenal Isyarat Dasar",
      totalQuestions: 5,
      questions: [
        {
          id: 1,
          type: "image-to-text",
          question: "Apa huruf dalam bahasa isyarat ini?",
          imageUrl: `${path}/A.png`,
          options: [
            { id: "a", text: "A", isCorrect: true },
            { id: "b", text: "B", isCorrect: false },
            { id: "c", text: "C", isCorrect: false },
            { id: "d", text: "D", isCorrect: false },
          ],
          hint: "Perhatikan bentuk jari yang mengarah ke atas",
          explanation:
            "Isyarat ini adalah huruf A dalam bahasa isyarat, yang ditandai dengan jari telunjuk yang mengarah ke atas.",
        },
        {
          id: 2,
          type: "text-to-image",
          question: "Pilih gambar yang menunjukkan isyarat untuk huruf 'B'",
          letter: "B",
          options: [
            { id: "a", imageUrl: `${path}/A.png`, isCorrect: false },
            { id: "b", imageUrl: `${path}/B.png`, isCorrect: true },
            { id: "c", imageUrl: `${path}/C.png`, isCorrect: false },
            { id: "d", imageUrl: `${path}/D.png`, isCorrect: false },
          ],
          hint: "Perhatikan posisi jari yang membentuk huruf B",
          explanation:
            "Isyarat untuk huruf B dalam bahasa isyarat ditunjukkan dengan posisi jari yang membentuk huruf B.",
        },
        {
          id: 3,
          type: "image-to-text",
          question: "Apa huruf dalam bahasa isyarat ini?",
          imageUrl: `${path}/C.png`,
          options: [
            { id: "a", text: "A", isCorrect: false },
            { id: "b", text: "B", isCorrect: false },
            { id: "c", text: "C", isCorrect: true },
            { id: "d", text: "D", isCorrect: false },
          ],
          hint: "Perhatikan bentuk tangan yang melengkung seperti huruf C",
          explanation:
            "Isyarat ini adalah huruf C dalam bahasa isyarat, yang ditandai dengan posisi tangan yang melengkung.",
        },
        {
          id: 4,
          type: "text-to-image",
          question: "Pilih gambar yang menunjukkan isyarat untuk huruf 'D'",
          letter: "D",
          options: [
            { id: "a", imageUrl: `${path}/A.png`, isCorrect: false },
            { id: "b", imageUrl: `${path}/B.png`, isCorrect: false },
            { id: "c", imageUrl: `${path}/C.png`, isCorrect: false },
            { id: "d", imageUrl: `${path}/D.png`, isCorrect: true },
          ],
          hint: "Perhatikan posisi jari yang membentuk huruf D",
          explanation:
            "Isyarat untuk huruf D dalam bahasa isyarat ditunjukkan dengan posisi jari yang membentuk huruf D.",
        },
        {
          id: 5,
          type: "image-to-text",
          question: "Apa huruf dalam bahasa isyarat ini?",
          imageUrl: `${path}/E.png`,
          options: [
            { id: "a", text: "B", isCorrect: false },
            { id: "b", text: "C", isCorrect: false },
            { id: "c", text: "D", isCorrect: false },
            { id: "d", text: "E", isCorrect: true },
          ],
          hint: "Perhatikan bentuk jari yang mengarah ke samping",
          explanation:
            "Isyarat ini adalah huruf E dalam bahasa isyarat, yang ditandai dengan jari yang mengarah ke samping.",
        },
      ],
    },
    {
      id: 2,
      title: "Alfabet Isyarat F-J",
      subtitle: "Melanjutkan Perjalanan Isyarat",
      totalQuestions: 5,
      questions: [
        {
          id: 1,
          type: "image-to-text",
          question: "Apa huruf dalam bahasa isyarat ini?",
          imageUrl: `${path}/F.png`,
          options: [
            { id: "a", text: "E", isCorrect: false },
            { id: "b", text: "F", isCorrect: true },
            { id: "c", text: "G", isCorrect: false },
            { id: "d", text: "H", isCorrect: false },
          ],
          hint: "Perhatikan bentuk jari yang menyerupai huruf F",
          explanation:
            "Isyarat ini adalah huruf F dalam bahasa isyarat, yang ditandai dengan bentuk jari yang menyerupai huruf F.",
        },
        {
          id: 2,
          type: "text-to-image",
          question: "Pilih gambar yang menunjukkan isyarat untuk huruf 'G'",
          letter: "G",
          options: [
            { id: "a", imageUrl: `${path}/F.png`, isCorrect: false },
            { id: "b", imageUrl: `${path}/G.png`, isCorrect: true },
            { id: "c", imageUrl: `${path}/H.png`, isCorrect: false },
            { id: "d", imageUrl: `${path}/I.png`, isCorrect: false },
          ],
          hint: "Perhatikan posisi jari yang membentuk huruf G",
          explanation:
            "Isyarat untuk huruf G dalam bahasa isyarat ditunjukkan dengan posisi jari yang membentuk huruf G.",
        },
        {
          id: 3,
          type: "image-to-text",
          question: "Apa huruf dalam bahasa isyarat ini?",
          imageUrl: `${path}/H.png`,
          options: [
            { id: "a", text: "F", isCorrect: false },
            { id: "b", text: "G", isCorrect: false },
            { id: "c", text: "H", isCorrect: true },
            { id: "d", text: "I", isCorrect: false },
          ],
          hint: "Perhatikan bentuk tangan yang membentuk huruf H",
          explanation:
            "Isyarat ini adalah huruf H dalam bahasa isyarat, yang ditandai dengan bentuk tangan yang spesifik.",
        },
        {
          id: 4,
          type: "text-to-image",
          question: "Pilih gambar yang menunjukkan isyarat untuk huruf 'I'",
          letter: "I",
          options: [
            { id: "a", imageUrl: `${path}/F.png`, isCorrect: false },
            { id: "b", imageUrl: `${path}/G.png`, isCorrect: false },
            { id: "c", imageUrl: `${path}/H.png`, isCorrect: false },
            { id: "d", imageUrl: `${path}/I.png`, isCorrect: true },
          ],
          hint: "Perhatikan posisi jari yang membentuk huruf I",
          explanation:
            "Isyarat untuk huruf I dalam bahasa isyarat ditunjukkan dengan posisi jari yang membentuk huruf I.",
        },
        {
          id: 5,
          type: "image-to-text",
          question: "Apa huruf dalam bahasa isyarat ini?",
          imageUrl: `${path}/J.png`,
          options: [
            { id: "a", text: "G", isCorrect: false },
            { id: "b", text: "H", isCorrect: false },
            { id: "c", text: "I", isCorrect: false },
            { id: "d", text: "J", isCorrect: true },
          ],
          hint: "Perhatikan gerakan jari yang membentuk huruf J",
          explanation:
            "Isyarat ini adalah huruf J dalam bahasa isyarat, yang ditandai dengan gerakan jari yang khas.",
        },
      ],
    },
    {
      id: 3,
      title: "Alfabet Isyarat K-O",
      subtitle: "Memperdalam Pemahaman Isyarat",
      totalQuestions: 5,
      questions: [
        {
          id: 1,
          type: "image-to-text",
          question: "Apa huruf dalam bahasa isyarat ini?",
          imageUrl: `${path}/K.png`,
          options: [
            { id: "a", text: "J", isCorrect: false },
            { id: "b", text: "K", isCorrect: true },
            { id: "c", text: "L", isCorrect: false },
            { id: "d", text: "M", isCorrect: false },
          ],
          hint: "Perhatikan bentuk jari yang menyerupai huruf K",
          explanation:
            "Isyarat ini adalah huruf K dalam bahasa isyarat, yang ditandai dengan bentuk jari yang spesifik.",
        },
        {
          id: 2,
          type: "text-to-image",
          question: "Pilih gambar yang menunjukkan isyarat untuk huruf 'L'",
          letter: "L",
          options: [
            { id: "a", imageUrl: `${path}/K.png`, isCorrect: false },
            { id: "b", imageUrl: `${path}/L.png`, isCorrect: true },
            { id: "c", imageUrl: `${path}/M.png`, isCorrect: false },
            { id: "d", imageUrl: `${path}/N.png`, isCorrect: false },
          ],
          hint: "Perhatikan posisi jari yang membentuk huruf L",
          explanation:
            "Isyarat untuk huruf L dalam bahasa isyarat ditunjukkan dengan posisi jari yang membentuk huruf L.",
        },
        {
          id: 3,
          type: "image-to-text",
          question: "Apa huruf dalam bahasa isyarat ini?",
          imageUrl: `${path}/M.png`,
          options: [
            { id: "a", text: "K", isCorrect: false },
            { id: "b", text: "L", isCorrect: false },
            { id: "c", text: "M", isCorrect: true },
            { id: "d", text: "N", isCorrect: false },
          ],
          hint: "Perhatikan bentuk tangan dengan jari tertutup",
          explanation:
            "Isyarat ini adalah huruf M dalam bahasa isyarat, yang ditandai dengan posisi jari yang spesifik.",
        },
        {
          id: 4,
          type: "text-to-image",
          question: "Pilih gambar yang menunjukkan isyarat untuk huruf 'N'",
          letter: "N",
          options: [
            { id: "a", imageUrl: `${path}/K.png`, isCorrect: false },
            { id: "b", imageUrl: `${path}/L.png`, isCorrect: false },
            { id: "c", imageUrl: `${path}/M.png`, isCorrect: false },
            { id: "d", imageUrl: `${path}/N.png`, isCorrect: true },
          ],
          hint: "Perhatikan posisi jari yang membentuk huruf N",
          explanation:
            "Isyarat untuk huruf N dalam bahasa isyarat ditunjukkan dengan posisi jari yang membentuk huruf N.",
        },
        {
          id: 5,
          type: "image-to-text",
          question: "Apa huruf dalam bahasa isyarat ini?",
          imageUrl: `${path}/O.png`,
          options: [
            { id: "a", text: "L", isCorrect: false },
            { id: "b", text: "M", isCorrect: false },
            { id: "c", text: "N", isCorrect: false },
            { id: "d", text: "O", isCorrect: true },
          ],
          hint: "Perhatikan bentuk tangan yang membentuk lingkaran",
          explanation:
            "Isyarat ini adalah huruf O dalam bahasa isyarat, yang ditandai dengan bentuk tangan yang membentuk lingkaran.",
        },
      ],
    },
    {
      id: 4,
      title: "Alfabet Isyarat P-T",
      subtitle: "Melanjutkan Penguasaan Isyarat",
      totalQuestions: 5,
      questions: [
        {
          id: 1,
          type: "image-to-text",
          question: "Apa huruf dalam bahasa isyarat ini?",
          imageUrl: `${path}/P.png`,
          options: [
            { id: "a", text: "O", isCorrect: false },
            { id: "b", text: "P", isCorrect: true },
            { id: "c", text: "Q", isCorrect: false },
            { id: "d", text: "R", isCorrect: false },
          ],
          hint: "Perhatikan bentuk jari yang menunjuk ke bawah",
          explanation:
            "Isyarat ini adalah huruf P dalam bahasa isyarat, yang ditandai dengan bentuk jari yang spesifik.",
        },
        {
          id: 2,
          type: "text-to-image",
          question: "Pilih gambar yang menunjukkan isyarat untuk huruf 'Q'",
          letter: "Q",
          options: [
            { id: "a", imageUrl: `${path}/P.png`, isCorrect: false },
            { id: "b", imageUrl: `${path}/Q.png`, isCorrect: true },
            { id: "c", imageUrl: `${path}/R.png`, isCorrect: false },
            { id: "d", imageUrl: `${path}/S.png`, isCorrect: false },
          ],
          hint: "Perhatikan posisi jari yang membentuk huruf Q",
          explanation:
            "Isyarat untuk huruf Q dalam bahasa isyarat ditunjukkan dengan posisi jari yang membentuk huruf Q.",
        },
        {
          id: 3,
          type: "image-to-text",
          question: "Apa huruf dalam bahasa isyarat ini?",
          imageUrl: `${path}/R.png`,
          options: [
            { id: "a", text: "P", isCorrect: false },
            { id: "b", text: "Q", isCorrect: false },
            { id: "c", text: "R", isCorrect: true },
            { id: "d", text: "S", isCorrect: false },
          ],
          hint: "Perhatikan bentuk tangan dengan jari yang menyilang",
          explanation:
            "Isyarat ini adalah huruf R dalam bahasa isyarat, yang ditandai dengan posisi jari yang menyilang.",
        },
        {
          id: 4,
          type: "text-to-image",
          question: "Pilih gambar yang menunjukkan isyarat untuk huruf 'S'",
          letter: "S",
          options: [
            { id: "a", imageUrl: `${path}/P.png`, isCorrect: false },
            { id: "b", imageUrl: `${path}/Q.png`, isCorrect: false },
            { id: "c", imageUrl: `${path}/R.png`, isCorrect: false },
            { id: "d", imageUrl: `${path}/S.png`, isCorrect: true },
          ],
          hint: "Perhatikan posisi tangan yang tertutup",
          explanation:
            "Isyarat untuk huruf S dalam bahasa isyarat ditunjukkan dengan posisi tangan yang tertutup.",
        },
        {
          id: 5,
          type: "image-to-text",
          question: "Apa huruf dalam bahasa isyarat ini?",
          imageUrl: `${path}/T.png`,
          options: [
            { id: "a", text: "Q", isCorrect: false },
            { id: "b", text: "R", isCorrect: false },
            { id: "c", text: "S", isCorrect: false },
            { id: "d", text: "T", isCorrect: true },
          ],
          hint: "Perhatikan posisi ibu jari yang menonjol",
          explanation:
            "Isyarat ini adalah huruf T dalam bahasa isyarat, yang ditandai dengan posisi ibu jari yang menonjol.",
        },
      ],
    },
    {
      id: 5,
      title: "Alfabet Isyarat U-Z",
      subtitle: "Melengkapi Alfabet Isyarat",
      totalQuestions: 5,
      questions: [
        {
          id: 1,
          type: "image-to-text",
          question: "Apa huruf dalam bahasa isyarat ini?",
          imageUrl: `${path}/U.png`,
          options: [
            { id: "a", text: "T", isCorrect: false },
            { id: "b", text: "U", isCorrect: true },
            { id: "c", text: "V", isCorrect: false },
            { id: "d", text: "W", isCorrect: false },
          ],
          hint: "Perhatikan bentuk jari yang mengarah ke atas",
          explanation:
            "Isyarat ini adalah huruf U dalam bahasa isyarat, yang ditandai dengan dua jari yang mengarah ke atas.",
        },
        {
          id: 2,
          type: "text-to-image",
          question: "Pilih gambar yang menunjukkan isyarat untuk huruf 'V'",
          letter: "V",
          options: [
            { id: "a", imageUrl: `${path}/U.png`, isCorrect: false },
            { id: "b", imageUrl: `${path}/V.png`, isCorrect: true },
            { id: "c", imageUrl: `${path}/W.png`, isCorrect: false },
            { id: "d", imageUrl: `${path}/X.png`, isCorrect: false },
          ],
          hint: "Perhatikan posisi jari yang membentuk huruf V",
          explanation:
            "Isyarat untuk huruf V dalam bahasa isyarat ditunjukkan dengan posisi jari yang membentuk huruf V.",
        },
        {
          id: 3,
          type: "image-to-text",
          question: "Apa huruf dalam bahasa isyarat ini?",
          imageUrl: `${path}/W.png`,
          options: [
            { id: "a", text: "U", isCorrect: false },
            { id: "b", text: "V", isCorrect: false },
            { id: "c", text: "W", isCorrect: true },
            { id: "d", text: "X", isCorrect: false },
          ],
          hint: "Perhatikan bentuk tangan dengan tiga jari terbuka",
          explanation:
            "Isyarat ini adalah huruf W dalam bahasa isyarat, yang ditandai dengan tiga jari yang terbuka.",
        },
        {
          id: 4,
          type: "text-to-image",
          question: "Pilih gambar yang menunjukkan isyarat untuk huruf 'X'",
          letter: "X",
          options: [
            { id: "a", imageUrl: `${path}/U.png`, isCorrect: false },
            { id: "b", imageUrl: `${path}/V.png`, isCorrect: false },
            { id: "c", imageUrl: `${path}/W.png`, isCorrect: false },
            { id: "d", imageUrl: `${path}/X.png`, isCorrect: true },
          ],
          hint: "Perhatikan posisi jari yang membentuk huruf X",
          explanation:
            "Isyarat untuk huruf X dalam bahasa isyarat ditunjukkan dengan posisi jari yang membentuk huruf X.",
        },
        {
          id: 5,
          type: "image-to-text",
          question: "Apa huruf dalam bahasa isyarat ini?",
          imageUrl: `${path}/Z.png`,
          options: [
            { id: "a", text: "W", isCorrect: false },
            { id: "b", text: "X", isCorrect: false },
            { id: "c", text: "Y", isCorrect: false },
            { id: "d", text: "Z", isCorrect: true },
          ],
          hint: "Perhatikan gerakan tangan membentuk huruf Z",
          explanation:
            "Isyarat ini adalah huruf Z dalam bahasa isyarat, yang ditandai dengan gerakan tangan membentuk huruf Z.",
        },
      ],
    },
    {
      id: 6,
      title: "Angka Isyarat 1-4",
      subtitle: "Mengenal Isyarat Angka Dasar",
      totalQuestions: 5,
      questions: [
        {
          id: 1,
          type: "image-to-text",
          question: "Apa angka dalam bahasa isyarat ini?",
          imageUrl: `${path}/1.jpg`,
          options: [
            { id: "a", text: "1", isCorrect: true },
            { id: "b", text: "2", isCorrect: false },
            { id: "c", text: "3", isCorrect: false },
            { id: "d", text: "4", isCorrect: false },
          ],
          hint: "Perhatikan satu jari yang terangkat",
          explanation:
            "Isyarat ini adalah angka 1 dalam bahasa isyarat, yang ditandai dengan satu jari yang terangkat.",
        },
        {
          id: 2,
          type: "text-to-image",
          question: "Pilih gambar yang menunjukkan isyarat untuk angka '2'",
          letter: "2",
          options: [
            { id: "a", imageUrl: `${path}/1.jpg`, isCorrect: false },
            { id: "b", imageUrl: `${path}/2.jpg`, isCorrect: true },
            { id: "c", imageUrl: `${path}/3.jpg`, isCorrect: false },
            { id: "d", imageUrl: `${path}/4.jpg`, isCorrect: false },
          ],
          hint: "Perhatikan posisi jari yang menunjukkan dua jari",
          explanation:
            "Isyarat untuk angka 2 dalam bahasa isyarat ditunjukkan dengan dua jari yang terangkat.",
        },
        {
          id: 3,
          type: "image-to-text",
          question: "Apa angka dalam bahasa isyarat ini?",
          imageUrl: `${path}/3.jpg`,
          options: [
            { id: "a", text: "1", isCorrect: false },
            { id: "b", text: "2", isCorrect: false },
            { id: "c", text: "3", isCorrect: true },
            { id: "d", text: "4", isCorrect: false },
          ],
          hint: "Perhatikan tiga jari yang terangkat",
          explanation:
            "Isyarat ini adalah angka 3 dalam bahasa isyarat, yang ditandai dengan tiga jari yang terangkat.",
        },
        {
          id: 4,
          type: "text-to-image",
          question: "Pilih gambar yang menunjukkan isyarat untuk angka '4'",
          letter: "4",
          options: [
            { id: "a", imageUrl: `${path}/1.jpg`, isCorrect: false },
            { id: "b", imageUrl: `${path}/2.jpg`, isCorrect: false },
            { id: "c", imageUrl: `${path}/3.jpg`, isCorrect: false },
            { id: "d", imageUrl: `${path}/4.jpg`, isCorrect: true },
          ],
          hint: "Perhatikan posisi empat jari yang terangkat",
          explanation:
            "Isyarat untuk angka 4 dalam bahasa isyarat ditunjukkan dengan empat jari yang terangkat.",
        },
        {
          id: 5,
          type: "image-to-text",
          question: "Urutkan isyarat angka berikut dari kecil ke besar",
          imageUrl: `${path}/2.jpg`,
          options: [
            { id: "a", text: "1, 2, 3, 4", isCorrect: false },
            { id: "b", text: "2, 1, 3, 4", isCorrect: false },
            { id: "c", text: "2, 3, 4, 1", isCorrect: false },
            { id: "d", text: "2", isCorrect: true },
          ],
          hint: "Perhatikan jumlah jari yang ditunjukkan",
          explanation: "Isyarat ini menunjukkan angka 2 dalam bahasa isyarat.",
        },
      ],
    },
    {
      id: 7,
      title: "Angka Isyarat 5-8",
      subtitle: "Melanjutkan Angka Isyarat",
      totalQuestions: 5,
      questions: [
        {
          id: 1,
          type: "image-to-text",
          question: "Apa angka dalam bahasa isyarat ini?",
          imageUrl: `${path}/5.jpg`,
          options: [
            { id: "a", text: "4", isCorrect: false },
            { id: "b", text: "5", isCorrect: true },
            { id: "c", text: "6", isCorrect: false },
            { id: "d", text: "7", isCorrect: false },
          ],
          hint: "Perhatikan lima jari yang terangkat",
          explanation:
            "Isyarat ini adalah angka 5 dalam bahasa isyarat, yang ditandai dengan lima jari yang terangkat.",
        },
        {
          id: 2,
          type: "text-to-image",
          question: "Pilih gambar yang menunjukkan isyarat untuk angka '6'",
          letter: "6",
          options: [
            { id: "a", imageUrl: `${path}/5.jpg`, isCorrect: false },
            { id: "b", imageUrl: `${path}/6.jpg`, isCorrect: true },
            { id: "c", imageUrl: `${path}/7.jpg`, isCorrect: false },
            { id: "d", imageUrl: `${path}/8.jpg`, isCorrect: false },
          ],
          hint: "Perhatikan posisi jari yang menunjukkan angka 6",
          explanation:
            "Isyarat untuk angka 6 dalam bahasa isyarat ditunjukkan dengan posisi jari yang spesifik.",
        },
        {
          id: 3,
          type: "image-to-text",
          question: "Apa angka dalam bahasa isyarat ini?",
          imageUrl: `${path}/7.jpg`,
          options: [
            { id: "a", text: "5", isCorrect: false },
            { id: "b", text: "6", isCorrect: false },
            { id: "c", text: "7", isCorrect: true },
            { id: "d", text: "8", isCorrect: false },
          ],
          hint: "Perhatikan posisi jari yang menunjukkan angka 7",
          explanation:
            "Isyarat ini adalah angka 7 dalam bahasa isyarat, yang ditandai dengan posisi jari yang spesifik.",
        },
        {
          id: 4,
          type: "text-to-image",
          question: "Pilih gambar yang menunjukkan isyarat untuk angka '8'",
          letter: "8",
          options: [
            { id: "a", imageUrl: `${path}/5.jpg`, isCorrect: false },
            { id: "b", imageUrl: `${path}/6.jpg`, isCorrect: false },
            { id: "c", imageUrl: `${path}/7.jpg`, isCorrect: false },
            { id: "d", imageUrl: `${path}/8.jpg`, isCorrect: true },
          ],
          hint: "Perhatikan posisi jari yang menunjukkan angka 8",
          explanation:
            "Isyarat untuk angka 8 dalam bahasa isyarat ditunjukkan dengan posisi jari yang spesifik.",
        },
        {
          id: 5,
          type: "image-to-text",
          question: "Urutkan isyarat angka berikut dari besar ke kecil",
          imageUrl: `${path}/6.jpg`,
          options: [
            { id: "a", text: "6, 5, 4, 3", isCorrect: true },
            { id: "b", text: "6, 7, 8, 5", isCorrect: false },
            { id: "c", text: "5, 6, 7, 8", isCorrect: false },
            { id: "d", text: "6", isCorrect: false },
          ],
          hint: "Perhatikan posisi jari yang spesifik untuk angka 6",
          explanation: "Isyarat ini menunjukkan angka 6 dalam bahasa isyarat.",
        },
      ],
    },
    {
      id: 8,
      title: "Angka Isyarat 9-10 dan Kombinasi",
      subtitle: "Menyelesaikan Isyarat Angka",
      totalQuestions: 5,
      questions: [
        {
          id: 1,
          type: "image-to-text",
          question: "Apa angka dalam bahasa isyarat ini?",
          imageUrl: `${path}/9.jpg`,
          options: [
            { id: "a", text: "6", isCorrect: false },
            { id: "b", text: "7", isCorrect: false },
            { id: "c", text: "8", isCorrect: false },
            { id: "d", text: "9", isCorrect: true },
          ],
          hint: "Perhatikan posisi jari yang menunjukkan angka 9",
          explanation:
            "Isyarat ini adalah angka 9 dalam bahasa isyarat, yang ditandai dengan posisi jari yang spesifik.",
        },
        {
          id: 2,
          type: "text-to-image",
          question: "Pilih gambar yang menunjukkan isyarat untuk angka '2'",
          letter: "2",
          options: [
            { id: "a", imageUrl: `${path}/1.jpg`, isCorrect: false },
            { id: "b", imageUrl: `${path}/2.jpg`, isCorrect: true },
            { id: "c", imageUrl: `${path}/3.jpg`, isCorrect: false },
            { id: "d", imageUrl: `${path}/4.jpg`, isCorrect: false },
          ],
          hint: "Perhatikan posisi jari yang menunjukkan dua jari",
          explanation:
            "Isyarat untuk angka 2 dalam bahasa isyarat ditunjukkan dengan dua jari yang terangkat.",
        },
        {
          id: 3,
          type: "image-to-text",
          question: "Apa angka dalam bahasa isyarat ini?",
          imageUrl: `${path}/3.jpg`,
          options: [
            { id: "a", text: "1", isCorrect: false },
            { id: "b", text: "2", isCorrect: false },
            { id: "c", text: "3", isCorrect: true },
            { id: "d", text: "4", isCorrect: false },
          ],
          hint: "Perhatikan tiga jari yang terangkat",
          explanation:
            "Isyarat ini adalah angka 3 dalam bahasa isyarat, yang ditandai dengan tiga jari yang terangkat.",
        },
        {
          id: 4,
          type: "text-to-image",
          question: "Pilih gambar yang menunjukkan isyarat untuk huruf 'X'",
          letter: "X",
          options: [
            { id: "a", imageUrl: `${path}/U.png`, isCorrect: false },
            { id: "b", imageUrl: `${path}/V.png`, isCorrect: false },
            { id: "c", imageUrl: `${path}/W.png`, isCorrect: false },
            { id: "d", imageUrl: `${path}/X.png`, isCorrect: true },
          ],
          hint: "Perhatikan posisi jari yang membentuk huruf X",
          explanation:
            "Isyarat untuk huruf X dalam bahasa isyarat ditunjukkan dengan posisi jari yang membentuk huruf X.",
        },
        {
          id: 5,
          type: "image-to-text",
          question: "Apa angka dalam bahasa isyarat ini?",
          imageUrl: `${path}/1.jpg`,
          options: [
            { id: "a", text: "1", isCorrect: true },
            { id: "b", text: "2", isCorrect: false },
            { id: "c", text: "3", isCorrect: false },
            { id: "d", text: "4", isCorrect: false },
          ],
          hint: "Perhatikan satu jari yang terangkat",
          explanation:
            "Isyarat ini adalah angka 1 dalam bahasa isyarat, yang ditandai dengan satu jari yang terangkat.",
        },
      ],
    },
  ];

  const quizQuestion = quizzes.find((i) => i.id === id);
  return quizQuestion;
};

export const colorData = (page) => {
  if (page === "home") {
    return {
      day: {
        bg: "rgba(245, 242, 235, 0.6)",
        text: {
          heading: "text-[#3C4A2A] drop-shadow-md",
          primary: "text-white",
          regular: "text-[#3C4A2A] font-medium",
          light: "text-[#3C4A2A]/90",
        },
        button: {
          primary: "bg-[#5D6E47] hover:bg-[#4A583A] text-white",
          secondary:
            "bg-white/10 hover:bg-white/20 text-white border border-white/20",
          cta: "bg-white text-[#5D6E47] hover:bg-green-50",
        },
        card: {
          bg: "bg-[#F5F2EB]/90",
          border: "border-[#F5F2EB]/20",
        },
        badge: "bg-[#F5F2EB]/90 text-[#3C4A2A]",
        highlight: "text-[#3C4A2A]",
      },
      night: {
        bg: "rgba(25, 25, 112, 0.8)",
        text: {
          heading: "text-white",
          primary: "text-white",
          regular: "text-white/80",
          light: "text-white/60",
        },
        button: {
          primary: "bg-green-500 hover:bg-green-600 text-white",
          secondary:
            "bg-white/10 hover:bg-white/20 text-white border border-white/20",
          cta: "bg-white text-green-600 hover:bg-green-50",
        },
        card: {
          bg: "bg-white/10",
          border: "border-white/10",
        },
        badge: "bg-green-500/20 text-green-300",
        highlight: "text-green-400",
      },
    };
  } else  if (page === "login") {
    return {
      day: {
        cardBg: "bg-[#F5F2EB]/90",
        cardBorder: "border-[#F5F2EB]/20",
        primary: "bg-[#5D6E47]",
        primaryHover: "hover:bg-[#4A583A]",
        primaryText: "text-[#FFFFFF]",
        headingText: "text-[#3C4A2A]",
        regularText: "text-[#5A6B47]",
        lightText: "text-[#5A6B47]/80",
        inputBg: "bg-[#F5F2EB]/50",
        inputBorder: "border-[#CAC3B8]",
        inputBorderFocus: "border-[#5A6B47]",
        inputColor: "text-gray-700 placeholder-gray-500",
        link: "text-[#7D5F40]",
        linkHover: "hover:text-[#5A4427]",
        divider: "border-[#D8D0C5]",
        socialButton: "border-[#D8D0C5] bg-[#F5F2EB]/70",
        socialButtonHover: "border-[#7D5F40]",
        socialButtonShadow: "shadow-[0_5px_15px_rgba(93,110,71,0.25)]",
      },
      night: {
        cardBg: "bg-[#1A2238]/60",
        cardBorder: "border-indigo-900",
        primary: "bg-green-500",
        primaryHover: "hover:bg-green-600",
        primaryText: "text-white",
        headingText: "text-white",
        regularText: "text-white/80",
        lightText: "text-white/60",
        inputBg: "bg-[#1A2238]/40",
        inputBorder: "border-indigo-700",
        inputBorderFocus: "border-green-500",
        inputColor: "text-white placeholder-white",
        link: "text-green-400",
        linkHover: "hover:text-green-300",
        divider: "border-indigo-800",
        socialButton: "border-indigo-800 bg-[#1A2238]/50",
        socialButtonHover: "border-green-500",
        socialButtonShadow: "shadow-[0_5px_15px_rgba(16,185,129,0.25)]",
      },
    };
  } else if (page === "register") {
    return {
      day: {
        cardBg: "bg-[#F5F2EB]/90",
        cardBorder: "border-[#F5F2EB]/20",
        primary: "bg-[#5D6E47]",
        primaryHover: "hover:bg-[#4A583A]",
        primaryText: "text-[#FFFFFF]",
        headingText: "text-[#3C4A2A]",
        regularText: "text-[#5A6B47]",
        lightText: "text-[#5A6B47]/80",
        inputBg: "bg-[#F5F2EB]/50",
        inputBorder: "border-[#CAC3B8]",
        inputBorderFocus: "border-[#5A6B47]",
        inputColor: "text-gray-700 placeholder-gray-500",
        link: "text-[#7D5F40]",
        linkHover: "hover:text-[#5A4427]",
        divider: "border-[#D8D0C5]",
        socialButton: "border-[#D8D0C5] bg-[#F5F2EB]/70",
        socialButtonHover: "border-[#7D5F40]",
        socialButtonShadow: "shadow-[0_5px_15px_rgba(93,110,71,0.25)]",
        checkbox: "border-[#CAC3B8] text-[#5D6E47] focus:ring-[#5D6E47]",
      },
      night: {
        cardBg: "bg-[#1A2238]/60",
        cardBorder: "border-indigo-900",
        primary: "bg-green-500",
        primaryHover: "hover:bg-green-600",
        primaryText: "text-white",
        headingText: "text-white",
        regularText: "text-white/80",
        lightText: "text-white/60",
        inputBg: "bg-[#1A2238]/40",
        inputBorder: "border-indigo-700",
        inputBorderFocus: "border-green-500",
        inputColor: "text-white placeholder-white",
        link: "text-green-400",
        linkHover: "hover:text-green-300",
        divider: "border-indigo-800",
        socialButton: "border-indigo-800 bg-[#1A2238]/50",
        socialButtonHover: "border-green-500", 
        socialButtonShadow: "shadow-[0_5px_15px_rgba(16,185,129,0.25)]",
        checkbox: "border-indigo-700 text-green-500 focus:ring-green-500",
      },
    };
  } else if (page === "learing") {
    return {
      day: {
        bg: "from-[#F8F4E9] to-[#E8E1CF]",
        text: {
          heading: "text-[#4E6139]",
          primary: "text-[#5D6E47]",
          secondary: "text-[#7D5F40]",
          light: "text-[#5D6E47]/70",
          white: "text-white",
        },
        card: {
          bg: "bg-[#FFFFFF]/85",
          border: "border-[#E0D5C1]/40",
          highlight: "bg-[#5D6E47]",
        },
        accent: {
          primary: "bg-[#5D6E47]",
          secondary: "bg-[#7D5F40]",
          tertiary: "bg-[#A67B5B]",
        },
        button: {
          primary: "bg-[#5D6E47] hover:bg-[#4E6139] text-white",
          secondary: "bg-[#7D5F40] hover:bg-[#6A5037] text-white",
          disabled: "bg-[#D7D1C9] text-[#A1998E]",
        },
        badge: "bg-[#F5F2EB] text-[#5D6E47]",
      },
      night: {
        bg: "from-indigo-900/80 to-purple-900/80",
        text: {
          regular: "text-white",
          heading: "text-white",
          primary: "text-white",
          secondary: "text-white/80",
          light: "text-white/60",
          white: "text-white",
        },
        card: {
          bg: "bg-[#1A2238]/60",
          border: "border-indigo-900",
          highlight: "bg-green-500",
        },
        accent: {
          primary: "bg-green-500",
          secondary: "bg-green-600",
          tertiary: "bg-green-400",
        },
        button: {
          primary: "bg-green-500 hover:bg-green-600 text-white",
          secondary:
            "bg-white/10 hover:bg-white/20 text-white border border-white/20",
          disabled: "bg-gray-700 text-gray-500",
        },
        badge: "bg-green-500/20 text-green-300",
      },
    };
  } else if (page === "result") {
    return {
      day: {
        bg: "from-[#8BC34A]/20 to-[#2E7D32]/30",
        text: {
          heading: "text-[#1B5E20]",
          primary: "text-[#3C4A2A]",
          secondary: "text-[#2E7D32]",
          light: "text-[#2E7D32]/70",
          white: "text-white",
        },
        card: {
          bg: "bg-[#F5F2EB]/90",
          border: "border-[#F5F2EB]/20",
          highlight: "bg-[#5D6E47]",
          inner: "bg-[#F9F7F4]/70",
        },
        accent: {
          primary: "bg-[#5D6E47]",
          secondary: "bg-[#7D5F40]",
          tertiary: "bg-[#A67B5B]",
          success: "bg-[#4CAF50]/20",
          warning: "bg-[#FF9800]/20",
        },
        button: {
          primary:
            "bg-[#5D6E47] hover:bg-[#4A583A] active:bg-[#3C4A2A] text-white",
          secondary:
            "bg-[#7D5F40] hover:bg-[#6A5037] active:bg-[#574229] text-white",
          disabled: "bg-gray-400 text-gray-600",
        },
        badge: "bg-[#F5F2EB]/90 text-[#3C4A2A]",
        progress: {
          bg: "text-[#E0E0E0]",
          fill: "text-[#5D6E47]",
          warning: "text-[#FF9800]",
        },
      },
      night: {
        bg: "from-[#1A237E]/80 to-[#311B92]/80",
        text: {
          heading: "text-white",
          primary: "text-white",
          secondary: "text-white/80",
          light: "text-white/60",
          white: "text-white",
        },
        card: {
          bg: "bg-[#1A2238]/60",
          border: "border-[#3F51B5]/30",
          highlight: "bg-[#7C4DFF]",
          inner: "bg-[#1A2238]/80",
        },
        accent: {
          primary: "bg-[#7C4DFF]",
          secondary: "bg-[#536DFE]",
          tertiary: "bg-[#3D5AFE]",
          success: "bg-[#00E676]/20",
          warning: "bg-[#FFAB00]/20",
        },
        button: {
          primary:
            "bg-[#7C4DFF] hover:bg-[#651FFF] active:bg-[#5E35B1] text-white",
          secondary:
            "bg-white/10 hover:bg-white/20 active:bg-white/30 text-white border border-white/20",
          disabled: "bg-gray-700 text-gray-500",
        },
        badge: "bg-[#7C4DFF]/20 text-[#B388FF]",
        progress: {
          bg: "text-gray-700",
          fill: "text-[#7C4DFF]",
          warning: "text-[#FFAB00]",
        },
      },
    };
  }
};

export const getAnimationStyle = (delay) => {
  return {
    opacity: 0,
    transform: "translateY(1rem)",
    animation: `fadeInUp 0.5s ease ${delay}s forwards`,
  };
};

export const shouldShake = (fieldName, shakeFields) => {
  return shakeFields.includes(fieldName);
};
