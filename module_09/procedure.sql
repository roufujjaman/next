CREATE OR REPLACE PROCEDURE remove_emp_by_id(p_emp_id INT)
LANGUAGE plpgsql
AS
$$
    BEGIN
        DELETE FROM employee WHERE "id" = p_emp_id;
        RAISE NOTICE "employee removed successfully"
    END
$$



CALL remove_emp_by_id(25);
