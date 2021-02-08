import Padding from 'components/padding';
import Spacer from 'components/spacer';

export default function Home({ props }) {
  return (
    <>
      <header>
        <Padding all={1}>
          <h3 className="text-primary">
            <h5>
              <small className="text-muted">TillWhen</small>
            </h5>
            Just Time Tracking
          </h3>
        </Padding>
      </header>

      <main>
        <section>
          <Padding all={1}>
            <div>
              <a href="/login" className="btn">
                Get Started
              </a>
            </div>
          </Padding>
        </section>
        <Spacer y={2}></Spacer>
        {/* Features */}
        <section>
          <Padding all={1}>
            <div>
              <h4 className="text-primary">Features</h4>
            </div>
            <div>
              <ul className="list-container">
                <li className="list-item">
                  Simple and to the point time tracking
                </li>
                <li className="list-item">
                  Slack and other Integrations (Beta) use the app from basically
                  everywhere
                </li>
                <li className="list-item">
                  Track your own activity like a boss
                </li>
                <li className="list-item">
                  Intuitive Team and Project Collaboration
                </li>
              </ul>
            </div>
          </Padding>
        </section>
        <Spacer y={2}></Spacer>
        {/* Pricing */}
        <section>
          <Padding all={1}>
            <div>
              <h4 className="text-primary">Pricing</h4>
            </div>
            <div>
              <ul className="list-container">
                <li className="list-item">
                  Free during beta. 2$ per user / per month after
                </li>
              </ul>
            </div>
          </Padding>
        </section>
        <Spacer y={2}></Spacer>
        {/* About */}
        <section>
          <Padding all={1}>
            <div>
              <h4 className="text-primary">About</h4>
            </div>
            <div>
              <p className="text-muted">
                Not a fan of data mining so , TillWhen doesn't record any
                personal info other than an Email and Name that is needed to
                identify you to be able to add you into projects. The only other
                data TillWhen has is the one you choose to store on this managed
                version.
                <Spacer y={2}></Spacer>A{' '}
                <strong className="text-primary">Self Hosted version</strong> is
                in the making and you can choose to use that if you don't want
                anything to be stored by a 3rd party provider.
              </p>
            </div>
          </Padding>
        </section>
        <Spacer y={2}></Spacer>
        {/* Questions */}
        <section>
          <Padding all={1}>
            <div>
              <h4 className="text-primary">Have a Question?</h4>
            </div>
            <div>
              <ul className="list-container">
                <li className="list-item">
                  Hit us up on{' '}
                  <a href="mailto:ahoy@barelyhuman.dev">
                    ahoy@barelyhuman.dev
                  </a>
                </li>
              </ul>
            </div>
          </Padding>
        </section>
      </main>
      <Spacer y={2}></Spacer>
      <footer>
        <div align="center" className="text-muted">
          <ul className="list-container">
            <li className="list-item">
              <a href="/legal/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div align="center" className="text-muted">
          &copy; 2021 <a href="https://barelyhuman.dev">BarelyHuman</a>
        </div>
      </footer>
      <Spacer y={2}></Spacer>

      <style jsx>
        {`
          body {
            font-family: var(--font-family);
            color: var(--black);
            max-width: var(--max-width);
          }

          header {
            margin: 0 auto;
            max-width: var(--max-width);
          }

          h1 {
            font-size: calc(7.5 * 8px);
            line-height: calc(8 * 10px);
          }

          h2 {
            font-size: calc(6.5 * 8px);
            line-height: calc(7 * 10px);
          }

          h3 {
            font-size: calc(5.5 * 8px);
            line-height: calc(6 * 10px);
          }

          h4 {
            font-size: calc(4.5 * 8px);
            line-height: calc(5 * 10px);
          }

          h5 {
            font-size: calc(3.5 * 8px);
            line-height: calc(4 * 10px);
          }

          h6 {
            font-size: calc(2.5 * 8px);
            line-height: calc(3 * 10px);
          }

          p {
            font-size: calc(2 * 8px);
            line-height: calc(2.5 * 10px);
          }

          a {
            color: var(--black-muted);
            text-decoration: underline;
          }

          a:hover {
            color: var(--black);
          }

          ul.list-container {
            padding-left: 0;
          }

          li.list-item {
            color: var(--black-muted);
            list-style-type: none;
            padding: 8px 0;
          }

          main {
            margin: 0 auto;
            max-width: var(--max-width);
          }

          footer {
            border-top: 1px solid var(--black-muted);
            margin: 0 auto;
            max-width: var(--max-width);
          }

          .text-primary {
            color: var(--black);
          }

          .text-muted {
            color: var(--black-muted);
          }

          .btn {
            border: 1px solid black;
            height: 32px;
            font-size: 13px;
            line-height: 32px;
            padding-left: 8px;
            padding-right: 8px;
            cursor: pointer;
            min-width: 132px;
            width: auto;
            text-decoration: none;
            text-align: center;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            background: black;
            color: white;
            border-radius: 6px;
            transition: 250ms background, border-color ease;
          }

          .btn:hover {
            border: 1px solid var(--black-muted);
            color: var(--white);
            background: var(--black-muted);
          }
        `}
      </style>

      <style jsx global>
        {`
          :root {
            --max-width: 900px;
            --font-family: Inter, sans-serif;
            --black: #121212;
            --black-muted: #666;
            --white: #fff;
          }

          * {
            padding: 0px;
            margin: 0px;
          }
        `}
      </style>
    </>
  );
}
