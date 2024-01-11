import FAQAccorion from './FaqAccordion';
const data = [
  {
    main: 'Top Questions',
    subQuestion: [
      {
        title:
          'I am having problems logging into the website. What am I doing wrong?',
        answer: () => {
          return (
            <div className="panel-inner">
              <p className="text"></p>
              <div className="cmp-text aem-cmp">
                <p>There are a couple of things you can check:</p>
                <ol>
                  <li>
                    <b>Is your password correct?</b>&nbsp;If youve forgotten
                    your password, you can click on the &ldquo;forgot
                    password&ldquo; option on the Login screen, enter your email
                    address and date of birth. A reset password email will be
                    sent to your registered email address and you can reset the
                    password.
                  </li>
                  <li>
                    <b>Is your username correct?</b>&nbsp;If you believe you are
                    entering the correct username, or you have forgotten it
                    altogether, contact&nbsp;
                    <a href="/about/contact-us">Customer Support</a>.
                  </li>
                </ol>
              </div>
              <p></p>
            </div>
          );
        },
      },
      {
        title: 'How do I unlock my account?',
        answer: () => {
          return (
            <div className="panel-inner">
              <p className="text"></p>
              <div className="cmp-text aem-cmp">
                <p>
                  If you have locked your account because you forgot your
                  password, you can click on the &ldquo;forgot password&ldquo;
                  option on the Login screen, enter your email address and date
                  of birth. A reset password email will be sent to your
                  registered email address and you can reset the password.
                </p>
                <p>
                  If you remember your password but have a locked account, you
                  can contact <a href="/about/contact-us">Customer Support</a>.
                </p>
              </div>
              <p></p>
            </div>
          );
        },
      },
      {
        title: 'How do I add a new debit card?',
        answer:
          'Please login and select your circled balance on the top of the screen in order to add/amend your debit card details.',
      },
      {
        title: "Why can't I finish my Instant Win game?",
        answer: () => {
          return (
            <div className="panel-inner">
              <p className="text"></p>
              <div className="cmp-text aem-cmp">
                <p>
                  When you purchase an Instant Win game online and you are
                  unable to finish it for whatever reason, the ticket is stored
                  in your game history as unfinished.
                </p>
                <p>
                  If you log onto your account and select &lsquo;My
                  Account&lsquo; followed by &lsquo;Tickets&lsquo; it will allow
                  you to continue your game where you lost it. Otherwise after
                  24 hours all &lsquo;Unfinished&lsquo; games will auto-complete
                  and you will see any winnings reflected in your online
                  balance.
                </p>
                <p>
                  The National Lottery Interactive website has been designed to
                  work with a wide range of systems while serving up a
                  comprehensive and dynamic experience.&nbsp;
                  <a href="/mobile-apps/supported-devices-browsers">
                    <u>Find out more about supported devices and browsers</u>
                  </a>
                  .
                </p>
              </div>
              <p></p>
            </div>
          );
        },
      },
      {
        title: 'How do I find details of games I have recently played?',
        answer:
          'You can view details of all games you have played over the last 121 days. Simply login to your account and select ‘Tickets’ from the menu.',
      },
      {
        title: 'How do I claim my prize?',
        answer: () => {
          return (
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quo praesentium exercitationem vero unde id magnam laboriosam
              consectetur doloribus reiciendis aperiam beatae impedit, magni
              accusantium, nisi eligendi in dignissimos eius!
            </div>
          );
        },
      },
      {
        title: 'How can I check if I have winning numbers?',
        answer: () => {
          return (
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quo praesentium exercitationem vero unde id magnam laboriosam
              consectetur doloribus reiciendis aperiam beatae impedit, magni
              accusantium, nisi eligendi in dignissimos eius!
            </div>
          );
        },
      },
      {
        title: 'Where can I find the winning EuroMillions Raffle numbers?',
        answer: () => {
          return (
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quo praesentium exercitationem vero unde id magnam laboriosam
              consectetur doloribus reiciendis aperiam beatae impedit, magni
              accusantium, nisi eligendi in dignissimos eius!
            </div>
          );
        },
      },
      {
        title:
          'Why am I getting a location services error message in the Mobile App?',
        answer: () => {
          return (
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quo praesentium exercitationem vero unde id magnam laboriosam
              consectetur doloribus reiciendis aperiam beatae impedit, magni
              accusantium, nisi eligendi in dignissimos eius!
            </div>
          );
        },
      },
    ],
  },
  {
    main: 'Draw Based Games – Lotto, EuroMillions and Daily Million',
    subQuestion: [
      {
        title: 'What time do sales close?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              architecto doloribus ea. Accusamus vitae quod assumenda nesciunt
              reprehenderit. Pariatur nobis rerum ut commodi deleniti eligendi
              deserunt sunt id porro voluptates.
            </div>
          );
        },
      },
      {
        title: 'Where can I get the results?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              architecto doloribus ea. Accusamus vitae quod assumenda nesciunt
              reprehenderit. Pariatur nobis rerum ut commodi deleniti eligendi
              deserunt sunt id porro voluptates.
            </div>
          );
        },
      },
      {
        title: 'What times are the Lotto and TellyBingo shows broadcast?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              architecto doloribus ea. Accusamus vitae quod assumenda nesciunt
              reprehenderit. Pariatur nobis rerum ut commodi deleniti eligendi
              deserunt sunt id porro voluptates.
            </div>
          );
        },
      },
      {
        title:
          'Can I claim a EuroMillions prize here on a ticket bought in another country?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              architecto doloribus ea. Accusamus vitae quod assumenda nesciunt
              reprehenderit. Pariatur nobis rerum ut commodi deleniti eligendi
              deserunt sunt id porro voluptates.
            </div>
          );
        },
      },
      {
        title: 'What is Lotto 5-4-3-2-1?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              architecto doloribus ea. Accusamus vitae quod assumenda nesciunt
              reprehenderit. Pariatur nobis rerum ut commodi deleniti eligendi
              deserunt sunt id porro voluptates.
            </div>
          );
        },
      },
    ],
  },
  {
    main: 'EuroMillions Game',
    subQuestion: [
      {
        title: 'What is the current cap?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              similique, quaerat excepturi obcaecati vero aliquam blanditiis
              non, voluptas numquam incidunt repellat. Reprehenderit ullam
              repudiandae reiciendis aut animi modi quod est.
            </div>
          );
        },
      },
      {
        title: 'Have there been changes to the EuroMillions game?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              similique, quaerat excepturi obcaecati vero aliquam blanditiis
              non, voluptas numquam incidunt repellat. Reprehenderit ullam
              repudiandae reiciendis aut animi modi quod est.
            </div>
          );
        },
      },
      {
        title: 'How does the Ireland-Only Raffle work?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              similique, quaerat excepturi obcaecati vero aliquam blanditiis
              non, voluptas numquam incidunt repellat. Reprehenderit ullam
              repudiandae reiciendis aut animi modi quod est.
            </div>
          );
        },
      },
      {
        title: "Why can't players choose their own raffle numbers?",
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              similique, quaerat excepturi obcaecati vero aliquam blanditiis
              non, voluptas numquam incidunt repellat. Reprehenderit ullam
              repudiandae reiciendis aut animi modi quod est.
            </div>
          );
        },
      },
      {
        title: 'What are the odds of winning?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              similique, quaerat excepturi obcaecati vero aliquam blanditiis
              non, voluptas numquam incidunt repellat. Reprehenderit ullam
              repudiandae reiciendis aut animi modi quod est.
            </div>
          );
        },
      },
    ],
  },
  {
    main: 'Scratch Cards',
    subQuestion: [
      {
        title: 'How can I identify a scratch card game number?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt excepturi pariatur. Dignissimos architecto quam hic at
              eos commodi! Delectus in veniam voluptatum beatae quis tempora
              autem adipisci nemo accusantium.
            </div>
          );
        },
      },
      {
        title:
          'What colour envelope do you use to enter a 3-star ticket into the draw for the Winning Streak TV game show?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt excepturi pariatur. Dignissimos architecto quam hic at
              eos commodi! Delectus in veniam voluptatum beatae quis tempora
              autem adipisci nemo accusantium.
            </div>
          );
        },
      },
      {
        title: 'How can I claim Scratch Card prizes?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              deserunt excepturi pariatur. Dignissimos architecto quam hic at
              eos commodi! Delectus in veniam voluptatum beatae quis tempora
              autem adipisci nemo accusantium.
            </div>
          );
        },
      },
    ],
  },
  {
    main: 'Instant Win Games',
    subQuestion: [
      {
        title: "Why can't I play the Instant Win game I just purchased?",
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'What browsers and devices can I play Instant Win games on?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'When is the outcome of play determined?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'How do I know if I have won an Instant Win Game?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
    ],
  },
  {
    main: 'Playing Online',
    subQuestion: [
      {
        title: 'I forgot my login details. What should I do?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'Are there any charges for using a payment card to play online?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'What are the times of operation for Online Play?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'What devices and browsers are supported by Lottery.ie?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: "How do I know when and how much I've won?",
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'How do I claim my winnings?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: "Can I see a list of all of the games I've played in the past?",
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: "Why can't I purchase a Lottery ticket over €75?",
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'What payment types can I use to play online?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title:
          'When can online players use N26 and Revolut to play National Lottery games?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title:
          'When can online players use N26 and Revolut to play National Lottery games?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
    ],
  },
  {
    main: 'Registering',
    subQuestion: [
      {
        title:
          'Do I have to be a Republic of Ireland resident to open an account?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'How old do I have to be to register?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'Do I need to supply ID when I register?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'How quickly can I play online after registering?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
    ],
  },
  {
    main: 'My Account',
    subQuestion: [
      {
        title: 'What are my spending limits?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'What are locked games?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'How do I close my account?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'Are there any charges for using a payment card to play online?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'Can I withdraw money from my wallet?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title:
          'I transferred too much money to my wallet. Can I cancel the transfer?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'My payment card expired. Can I still play games?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title:
          "When will money I've transferred to my wallet from my payment card be available to play games?",
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
    ],
  },
  {
    main: 'The National Lottery App',
    subQuestion: [
      {
        title: 'Questions about the National Lottery app?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
    ],
  },
  {
    main: 'Ticket Checking',
    subQuestion: [
      {
        title: 'My ticket won’t scan, what do I do?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'My ticket won’t scan. What is the problem?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title:
          'I tried to check my ticket in my local shop but they said it wasn’t valid. I can see I that I have winning numbers. What do I do?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
    ],
  },
  {
    main: 'ID Verification to Add or Change a Payment Card',
    subQuestion: [
      {
        title:
          'Why are the National Lottery asking online players to submit ID’s to continue playing?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'What do I have to do to ID verify?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title:
          'I have previously won a prize while playing online and as part of the claims process, I have already submitted my ID. Does this mean that my account is now automatically age verified?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'Why do I have to do this now? Do you think I am underage?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'I’m having trouble verifying my documents.',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
      {
        title: 'How does ID verification encourage responsible play?',
        answer: () => {
          return (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              iste quod deleniti consequatur saepe, aspernatur cum fugit,
              consectetur repudiandae, pariatur ipsa voluptatum dolorum beatae
              possimus quas quo odit nihil dignissimos.
            </div>
          );
        },
      },
    ],
  },
];
const FAQpage = () => {
  return (
    <div className="bg-[#ebebeb] py-5 px-[1rem]">
      <div className="max-w-[1200px] w-full mx-auto bg-white p-3 rounded-lg shadow-xl">
        <h2 className="text-[#4b636e] text-[27px] font-black mb-[1.5rem]">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-[1rem]">
          {data.map((val, index) => {
            return (
              <div
                key={index}
                className=" rounded-md shadow-md"
                // style={{ boxShadow: '0px 0px 4px 1px #cfcfcf' }}
              >
                <FAQAccorion title={val.main} border={false} heading={true}>
                  {val.subQuestion.map((item, i) => {
                    return (
                      <div key={i}>
                        <FAQAccorion title={item.title} border={true}>
                          {typeof item.answer === 'function'
                            ? item.answer()
                            : item.answer}
                        </FAQAccorion>
                      </div>
                    );
                  })}
                </FAQAccorion>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQpage;
