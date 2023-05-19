/* eslint-disable react/jsx-one-expression-per-line */
import Typography from '@/components/layout/Typography';

export default {
  title: 'Project Info/Typography',
  component: Typography,
};

export const Formatting = {
  render: () => (
    <Typography>
      <table className="border-collapse border border-slate-400">
        <tr>
          <td className="border border-slate-300 p-4">normal</td>
          <td className="border border-slate-300 p-4">
            Duis deserunt cillum exercitation laborum cillum officia culpa id
            culpa.
          </td>
        </tr>
        <tr>
          <td className="border border-slate-300 p-4">strong</td>
          <td className="border border-slate-300 p-4">
            <strong>
              Duis deserunt cillum exercitation laborum cillum officia culpa id
              culpa.
            </strong>
          </td>
        </tr>
        <tr>
          <td className="border border-slate-300 p-4">em</td>
          <td className="border border-slate-300 p-4">
            <em>
              Duis deserunt cillum exercitation laborum cillum officia culpa id
              culpa.
            </em>
          </td>
        </tr>
        <tr>
          <td className="border border-slate-300 p-4">mark</td>
          <td className="border border-slate-300 p-4">
            <mark>
              Duis deserunt cillum exercitation laborum cillum officia culpa id
              culpa.
            </mark>
          </td>
        </tr>
        <tr>
          <td className="border border-slate-300 p-4">small</td>
          <td className="border border-slate-300 p-4">
            <small>
              Duis deserunt cillum exercitation laborum cillum officia culpa id
              culpa.
            </small>
          </td>
        </tr>
        <tr>
          <td className="border border-slate-300 p-4">del</td>
          <td className="border border-slate-300 p-4">
            <del>
              Duis deserunt cillum exercitation laborum cillum officia culpa id
              culpa.
            </del>
          </td>
        </tr>
        <tr>
          <td className="border border-slate-300 p-4">ins</td>
          <td className="border border-slate-300 p-4">
            <ins>
              Duis deserunt cillum exercitation laborum cillum officia culpa id
              culpa.
            </ins>
          </td>
        </tr>
        <tr>
          <td className="border border-slate-300 p-4">sup</td>
          <td className="border border-slate-300 p-4">
            <sub>
              Duis deserunt cillum exercitation laborum cillum officia culpa id
              culpa.
            </sub>
          </td>
        </tr>
        <tr>
          <td className="border border-slate-300 p-4">sup</td>
          <td className="border border-slate-300 p-4">
            <sup>
              Duis deserunt cillum exercitation laborum cillum officia culpa id
              culpa.
            </sup>
          </td>
        </tr>
      </table>
    </Typography>
  ),
};

export const LinkTo = {
  name: 'Link',
  render: () => (
    <Typography>
      <a href="./">Fugiat magna incididunt nulla anim.</a>
    </Typography>
  ),
};

export const Paragraph = {
  render: () => (
    <Typography>
      <div className="max-w-screen-md flex flex-col align-center">
        <p>
          Dolore irure quis eu ullamco reprehenderit sint duis eiusmod Dolore
          irure quis eu ullamco reprehenderit sint duis eiusmod Dolore irure
          quis eu ullamco reprehenderit sint duis eiusmod Dolore irure quis eu
          ullamco reprehenderit sint duis eiusmod
        </p>
        <p>
          Consequat irure qui nisi enim veniam laboris ex. Reprehenderit laborum
          in ipsum Lorem eu laborum in esse velit culpa voluptate cillum non
          ullamco. Culpa esse ex est magna est elit laboris laboris velit est.
          Ipsum sint tempor non id culpa minim. Officia Lorem aliquip sit
          nostrud laboris quis adipisicing irure est.
        </p>
        <p>
          Sunt reprehenderit dolor qui reprehenderit eiusmod amet. Laboris
          veniam sint sit irure ad dolore reprehenderit ullamco tempor aliquip
          duis. Nulla fugiat ad aliqua id.
        </p>
      </div>
    </Typography>
  ),
};
