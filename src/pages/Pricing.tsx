export default function Pricing() {
  return (
    <>
      <section>
        <h1>Pricing</h1>
        <p>Simple plans that scale with your project.</p>
      </section>

      <section>
        <h2>Plans</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Plan</th>
              <th scope="col">Price</th>
              <th scope="col">Includes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Hobby</th>
              <td>Free</td>
              <td>1 project, community support, public repositories</td>
            </tr>
            <tr>
              <th scope="row">Pro</th>
              <td>$20 / month</td>
              <td>Unlimited projects, priority support, analytics</td>
            </tr>
            <tr>
              <th scope="row">Team</th>
              <td>$60 / month</td>
              <td>
                Everything in Pro, shared workspaces, role-based access
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Frequently asked questions</h2>
        <dl>
          <dt>Can I switch plans later?</dt>
          <dd>Yes, upgrade or downgrade at any time and we prorate the difference.</dd>
          <dt>Is there a free trial?</dt>
          <dd>The Hobby plan is free forever, no trial period or card required.</dd>
          <dt>Do you offer discounts?</dt>
          <dd>Students and open-source maintainers get Pro at no cost.</dd>
        </dl>
      </section>
    </>
  )
}
