import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Database icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Database = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDatabase} {...props} />;
};

export default Database;
