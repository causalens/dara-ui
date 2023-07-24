import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SyncAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SyncAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSyncAlt} {...props} />;
};

export default SyncAlt;
