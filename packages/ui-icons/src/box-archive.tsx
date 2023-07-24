import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BoxArchive icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BoxArchive = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBoxArchive} {...props} />;
};

export default BoxArchive;
