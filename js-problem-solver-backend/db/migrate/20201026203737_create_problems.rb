class CreateProblems < ActiveRecord::Migration[6.0]
  def change
    create_table :problems do |t|
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
