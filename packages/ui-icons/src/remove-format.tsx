import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RemoveFormat icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RemoveFormat = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRemoveFormat} {...props} />;
};

export default RemoveFormat;
