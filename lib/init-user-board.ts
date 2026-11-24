import connectDB from "./db";
import { Board, Column } from "./models";

const DEFAULT_COLUMNS = [
  {
    name: "Wish List",
    order: 0,
  },
  {
    name: "Applied",
    order: 1,
  },
  {
    name: "Interviewing",
    order: 2,
  },
  {
    name: "offer",
    order: 3,
  },
  {
    name: "Refjected",
    order: 4,
  },
];

export async function initializedUserBoard(userId: string) {
  try {
    await connectDB();

    //check if board already exists
    const existingBoard = await Board.findOne({ userId, name: "Job Hunt" });

    if (existingBoard) {
      return existingBoard;
    }

    const board = await Board.create({
      name: "Job Hunt",
      userId,
      columns: [],
    });

    //create default column
    const columns = await Promise.all(
      DEFAULT_COLUMNS.map((col) =>
        Column.create({
          name: col.name,
          order: col.order,
          boardId: board._id,
          jobApplication: [],
        }),
      ),
    );
    console.log("create column",columns)

   //update the board with new column id
   board.columns=columns.map((col)=>col._id)
 
     await board.save()

     return board

  } catch (error) {
    console.log(error)
  }
}
