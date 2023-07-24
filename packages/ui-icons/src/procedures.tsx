import { faProcedures } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Procedures icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Procedures = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faProcedures} {...props} />;
};

export default Procedures;
