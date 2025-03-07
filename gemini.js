const { GoogleGenerativeAI } = require("@google/generative-ai");
const env = require('dotenv');
env.config();


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = `The following is a conversation from a group chat. Create a simple, formatted schedule from the events the group chat members have planned. Prioritize simplicity.

--CHAT BEGINS--
ha ! — 3/3/25, 10:56 AM
w Zach
u guys want to hang out sometime
idk_anymore — 3/3/25, 10:57 AM
Great footage for our documentary
idk_anymore — 3/3/25, 1:20 PM
Share it as a link through Google photos
Siva — 3/3/25, 4:12 PM
https://drive.google.com/file/d/1UsfSsIY0Ui34IjUL7cqRUxcvIei4ZigR/view?usp=sharing
Google Docs
IMG_2136.MOV
@idk_anymore when u get a chance can u download or save it if u can cause i wanna save on google drive space 
ha ! — 3/3/25, 4:27 PM
thanks
idk_anymore — 3/3/25, 4:29 PM
Downloaded it tha k you boss
Siva — 3/3/25, 4:35 PM
no prob
ha ! — 3/3/25, 5:11 PM
can we meet twice this week?
tuesday and sunday?
idk_anymore — 3/3/25, 6:35 PM
Ye
ha ! — 3/3/25, 6:42 PM
Bet
Siva — 3/3/25, 6:43 PM
i might not be able to on sun
but u guys can meet
ha ! — 3/3/25, 7:43 PM
Okay
If ur busy Sunday wb Friday
ha ! — 3/3/25, 9:23 PM
@Siva would it be possible to do Tuesday 3/18 instead of next Tuesday
I have wind ensemble rehearsal that I forgot about
Siva — 3/3/25, 9:24 PM
you mean for the recording session?
ha ! — 3/3/25, 9:24 PM
Yeah
My fault
Siva — 3/3/25, 9:24 PM
yeah should be good
ha ! — 3/3/25, 9:25 PM
Okay I’ll tell Jason
Siva — 3/3/25, 9:25 PM
i have something friday night
ha ! — 3/3/25, 9:25 PM
If he can’t I’ll beg my band director
Okay
Siva — 3/3/25, 9:25 PM
maybe jason is free on other days too 
ha ! — 3/3/25, 9:26 PM
Nvm I have some bullshit the week after
So lowkey I have to ask my band director then
We should still be on for next Tuesday for recording
I’ll just ask my band dirscotr
Siva — 3/3/25, 9:27 PM
ok i might not be free tho
on the 11th
which should be fine right cause it can be just u guys
ha ! — 3/3/25, 9:39 PM
yeah but u being there would be a lot better
idk_anymore — 3/3/25, 9:39 PM
We need you there 😩
Siva — 3/3/25, 9:43 PM
<3
alr lets try for 18
ha ! — 3/3/25, 9:49 PM
Nah I can’t do 18
No way you can do next Tuesday?
Siva — 3/3/25, 9:51 PM
i just dont know  yet
does any other days work tho
ha ! — 3/3/25, 9:52 PM
Monday
Siva — 3/3/25, 9:55 PM
same situation as tuesday, im playing for the usf band for basketball games this fri to next wednesday, just depends on if our team stays in the tournament
ha ! — 3/3/25, 9:55 PM
Ohhhh
R u going to vegas
Siva — 3/3/25, 9:55 PM
yeye
idk_anymore — 3/4/25, 1:08 AM
I'm gonna be at school until like 6ish tomorrow what time are we thinking
ha ! — 3/4/25, 1:23 PM
8 pm today?
idk_anymore — 3/4/25, 1:36 PM
kk
i cant stay super late
Siva — 3/4/25, 1:37 PM
Yuh
ha ! — 3/4/25, 1:37 PM
Ayyy
8-10?
and we focus entirely on coming up with lyrics and vocals
idk_anymore — 3/4/25, 1:39 PM
soundsg
ha ! — 3/4/25, 2:10 PM
Ye so don’t worry about bringing your pedalboard
Maybe a notebook for lyric ideas or something
Lets get together each spend 10 minutes writing stuff down and piecing together a song from that
idk_anymore — 3/4/25, 2:13 PM
Alr
ha ! — 3/4/25, 2:13 PM
class free writing sesh
idk_anymore — 3/4/25, 7:53 PM
Omw got home late sorry
idk_anymore — 3/4/25, 8:14 PM
Here
ha ! — 3/4/25, 8:17 PM
Wya
ha ! — 3/4/25, 11:37 PM
https://drive.google.com/file/d/1t68zdOq9n3Zwj4shRI8MZl8a3cfaIcwD/view?usp=sharing
Google Docs
SOMETHING SUNDAY_mix_toy guitar no vocals.wav
ha ! — 3/5/25, 4:03 PM
@idk_anymore can you send some music to listen to
idk_anymore — 3/5/25, 4:03 PM
What genre
ha ! — 3/5/25, 4:03 PM
ifl i need to expand my taste
weird shit that i might like
or any other stuff u like
idk_anymore — 3/5/25, 4:04 PM
https://open.spotify.com/album/6yWMN087PgSimbcVmHLEwG?si=_bQRyZW3SCWUx7ILAYL17A

ha ! — 3/5/25, 4:04 PM
lmao IK Aenima
but thanks
some shit you would show Jason AB
idk_anymore — 3/5/25, 4:05 PM
What's AB
ha ! — 3/5/25, 4:06 PM
ArtBoutiki
idk_anymore — 3/5/25, 4:08 PM
Oh
So like funky and weird
ha ! — 3/5/25, 4:10 PM
yeah
or rock sounding and weird
idk_anymore — 3/5/25, 4:10 PM
https://open.spotify.com/track/0cLH7BXqfm0RqnjueCPLfW?si=aZQUwd6RTCicoqE7N1ICbQ

ha ! — 3/5/25, 9:08 PM
@everyone
Siva — 3/5/25, 9:12 PM
damnnn
sounds hella clean
ha ! — 3/5/25, 9:28 PM
yeah def sounds better
but idk i tihnk itll sound great after it's mixed
Siva — 3/5/25, 10:53 PM
fs
ha ! — 3/5/25, 11:57 PM
This song is cool
The drums are hella crisp
Fuck now I’m obsssessed with drum sounds
ha ! — Yesterday at 12:08 AM
https://open.spotify.com/track/6dNk7wme2WgW7Sd6lYcCbL?si=h1IBpKq7QM6tDMVaGiR14g

Oh this shit is insane I’ve been sleeping on it for too long
ha ! — Yesterday at 1:04 AM
@idk_anymore tool lyrics
idk_anymore — Yesterday at 10:38 AM
Gonna listen in my car
idk_anymore — Yesterday at 10:38 AM
Huh
idk_anymore — Yesterday at 9:07 PM
It sounded pretty good in my car. For barely any mixing it's really good
`;

(async () => {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
})();